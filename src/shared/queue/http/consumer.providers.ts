import { ConsumerInstance } from "./consumer.instance.js";

export const ConsumerProviders = [
    {
        provide: 'CONSUMER',
        useFactory: async () => {
            const consumer = new ConsumerInstance();
            return consumer.getInstance();
        }
    }
]