import { OnQueueEvent, QueueEventsHost, QueueEventsListener } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
@QueueEventsListener('fila')
export class FilaEventListener extends QueueEventsHost {
    @OnQueueEvent('added')
    onAdded(job: {jobId: number; name: string}){
        Logger.log(`Job with id: ${job.jobId} added to queue`)
    }
}