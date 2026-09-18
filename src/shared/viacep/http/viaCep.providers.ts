import { ViaCepInstance } from "./viaCep.instance.js";


export const viaCepProviders = [
    {
        provide: 'VIACEP',
        useFactory: async () => {
            const via_cep = new ViaCepInstance();
            return via_cep.getInstance();
        }
    }
]