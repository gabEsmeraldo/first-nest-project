import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Cron, Interval, Timeout } from "@nestjs/schedule";
import { Queue } from "bullmq";

@Injectable()
export class FilaCron {
    constructor(@InjectQueue('fila') private readonly filaQueue: Queue){}

    @Cron('45 * * * * *', { disabled: Boolean(process.env.CRON_DISABLED)})
    // @Interval(5000)
    // @Timeout(10000)
    handleCron() {
        console.log(Boolean(process.env.CRON_DISABLED))
        this.filaQueue.add(
            'cronJob',
            {
                mensagem: 'Este é um cronjob teste',
                name: 'cronJob',
            }
        );
        console.log('CronJob ran')
    }
}