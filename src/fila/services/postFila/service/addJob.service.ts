import { Injectable } from "@nestjs/common";
import { AddJobDTO } from "../dto/addJob.dto.js";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";

@Injectable()
export class AddJobService {
    constructor(@InjectQueue('fila') private readonly filaQueue: Queue){}

    async execute(data: AddJobDTO){
        await this.filaQueue.add(
            'addJob',
            {
                mensagem: data.mensagem,
                name: 'job',
            }
        );
        return {
            message: 'Job added to queue',
        };
    }
}