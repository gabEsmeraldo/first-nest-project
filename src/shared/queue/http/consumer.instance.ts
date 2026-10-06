import axios, { AxiosInstance } from "axios";

export class ConsumerInstance {
    private instance: AxiosInstance;

    constructor() {
        axios.defaults.params = {};
        this.instance = axios.create({
            baseURL: 'http://nginx:3030/'
        });
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }
}