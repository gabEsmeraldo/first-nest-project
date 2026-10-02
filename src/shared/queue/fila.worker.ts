import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

@Processor('fila')
export class FilaProcessor extends WorkerHost {
    async process(job: Job){
        console.log(`Iniciado processamento do Job com id ${job.id}`)
        await new Promise((resolve) => setTimeout(resolve, 10000));
    }

    @OnWorkerEvent('completed')
    onCompleted(job: Job){
        console.log(`Job com id ${job.id} completo \nmensagem: ${job.data.mensagem}`)
    }
}