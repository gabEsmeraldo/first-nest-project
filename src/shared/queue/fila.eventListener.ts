import { OnQueueEvent, QueueEventsHost, QueueEventsListener } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
@QueueEventsListener('fila')
export class FilaEventListener extends QueueEventsHost {
    @OnQueueEvent('added')
    onAdded(job: {jobId: number; name: string}){
        switch (job.name) {
            case 'addJob':
                    Logger.log(`Job with id: ${job.jobId} added to queue`)
                break;
            case 'cronJob':
                    Logger.log(`Job with id: ${job.jobId} added to queue from cronJob`)
            default:
                break;
        }
    }
}