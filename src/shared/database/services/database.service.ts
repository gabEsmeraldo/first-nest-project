/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger } from '@nestjs/common';
import * as oracledb from 'oracledb';

@Injectable()
export class DatabaseService {
  private logger = new Logger('DatabaseService');

  public oracle: typeof oracledb & { OBJECT: number };
  public poolAlias = 'DASHONE';

  constructor() {
    this.oracle = oracledb as typeof oracledb & { OBJECT: number };
    this.poolAlias = 'DASHONE';

    (async () => {
      await this.createPool();
    })();

    oracledb.initOracleClient();
  }

  async createPool() {
    try {
      await oracledb.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
        poolIncrement: 3,
        poolMax: 25,
        poolMin: 3,
        poolPingInterval: 1,
        poolTimeout: 60,
        poolAlias: this.poolAlias,
      });

      this.logger.warn(`Conexão iniciada!`);

      process
        .once('SIGTERM', this.closePoolAndExit)
        .once('SIGINT', this.closePoolAndExit);
    } catch (err) {
      this.logger.error(
        'createPool: Ocorreu um erro ao iniciar a conexão',
        err,
      );
    }
  }

  async open() {
    return await oracledb.getConnection(this.poolAlias);
  }

  async commitAndClose(connection: oracledb.Connection) {
    try {
      if (!connection) {
        this.logger.error('commitAndClose: Conexão não encontrada.');
        return;
      }

      await connection.commit();
      await connection.close();
    } catch (err) {
      this.logger.error(`commitAndClose: ${err.stack}`);
      throw new Error(err);
    }
  }

  async findOne<T = any>(sql: string, binds: any = [], transaction = null) {
    const one = await this.query<T>(sql, binds, transaction);
    if (one.length >= 1) {
      return one[0];
    }
    return undefined;
  }

  async rollbackAndClose(connection: oracledb.Connection) {
    try {
      if (!connection) {
        this.logger.error('rollbackAndClose: Conexão não encontrada.');
        return;
      }

      await connection.rollback();

      await connection.close();
    } catch (err) {
      this.logger.error(`rollbackAndClose: ${err.stack}`);
      throw new Error(err);
    }
  }

  async query<T>(
    sql: string,
    binds: oracledb.BindParameters = {},
    connection?: oracledb.Connection | null,
  ): Promise<T[]> {
    let isOpenTransaction = true;

    const isLogging = process.env.DB_LOGGING as string;

    if (!connection) {
      connection = await this.open();
      isOpenTransaction = false;
    }

    try {
      const options = {
        outFormat: this.oracle.OBJECT,
        maxRows: 1000,
        dir: this.oracle.BIND_IN,
      };

      const result = await connection.execute(sql, binds, options);

      let rows: T[] = [];

      if (result && result.rows && result.rows.length > 0) {
        rows = result.rows.map((one: Record<string, unknown>) => {
          const newValues: Record<string, unknown> = {};

          Object.keys(one).forEach(
            (key: string) => (newValues[key.toLowerCase()] = one[key]),
          );

          return newValues;
        }) as T[];
      }

      if (!isOpenTransaction) this.commitAndClose(connection);
      if (isLogging) this.logger.debug(sql);

      return rows;
    } catch (err) {
      if (isLogging) this.logger.debug(`query: ${sql}`);
      this.logger.error(`query: ${err.stack}`);
      throw new Error(err);
    }
  }

  async queryBindOut<T>(
    sql: string,
    binds: oracledb.BindParameters = {},
    connection: oracledb.Connection | null = null,
  ): Promise<oracledb.Result<T>> {
    let isOpenTransaction = true;

    const isLogging = process.env.DB_LOGGING as string;

    try {
      if (!connection) {
        connection = await this.open();
        isOpenTransaction = false;
      }

      const options = {
        outFormat: this.oracle.OBJECT,
        maxRows: 1000,
        dir: this.oracle.BIND_IN,
      };

      const result = await connection.execute<T>(sql, binds, options);

      if (!isOpenTransaction) this.commitAndClose(connection);
      if (isLogging) this.logger.debug(sql);

      return result;
    } catch (err) {
      if (isLogging) this.logger.debug(`queryBindOut: ${sql}`);
      this.logger.error(`queryBindOut: ${err.stack}`);
      throw new Error(err);
    }
  }

  async closePoolAndExit() {
    try {
      await this.oracle.getPool(this.poolAlias).close(10);

      this.logger.warn('queryBindOut: Conexão encerrada.');

      process.exit(0);
    } catch (err) {
      process.exit(1);
    }
  }

  async executeManyRecords<T>(
    sql: string,
    records: oracledb.BindParameters[],
    connection?: oracledb.Connection | null,
  ): Promise<{ updates: number }> {
    let isOpenTransaction = true;

    const isLogging = process.env.DB_LOGGING === 'true';

    if (!connection) {
      connection = await this.open();
      isOpenTransaction = false;
    }

    try {
      const options: oracledb.ExecuteManyOptions = {
        autoCommit: !isOpenTransaction,
        batchErrors: true,
      };

      const result = await connection.executeMany(sql, records, options);

      if (!isOpenTransaction) {
        await this.commitAndClose(connection);
      }

      if (isLogging) {
        this.logger.debug(sql);
      }

      return { updates: result.rowsAffected ? result.rowsAffected : 404 };
    } catch (err) {
      if (isLogging) {
        this.logger.debug(`executeMany: ${sql}`);
      }
      this.logger.error(`executeMany: ${err.stack}`);
      throw new Error(err);
    }
  }
}
