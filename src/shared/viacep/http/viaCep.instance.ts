import axios, { AxiosInstance } from "axios";

export class ViaCepInstance {
    private instance: AxiosInstance;

    constructor() {
        axios.defaults.params = {};
        this.instance = axios.create({
            baseURL: 'https://viacep.com.br/ws/',
        });
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }
}