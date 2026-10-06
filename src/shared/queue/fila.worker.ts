import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Inject } from "@nestjs/common";
import type { AxiosInstance } from 'axios';
import { Job } from "bullmq";

@Processor('fila', { concurrency: 7 })
export class FilaProcessor extends WorkerHost {
    constructor(
        @Inject('CONSUMER')
        private readonly consumer: AxiosInstance,
    ){
        super();
    }
    
    // async process(job: Job){
    //     console.log(`Iniciado processamento do Job com id ${job.id}`)
    //     await new Promise((resolve) => setTimeout(resolve, 10000));
    // }

    async process(job: Job){
        console.log(`Started job with id: ${job.id}`)
        await this.consumer.post('', {
            id: job.id
        })
    }

    @OnWorkerEvent('completed')
    onCompleted(job: Job){
        console.log(`Job com id ${job.id} completo`)
    }
}