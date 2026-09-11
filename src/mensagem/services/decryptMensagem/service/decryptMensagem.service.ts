import { Injectable } from "@nestjs/common";

@Injectable()
export class DecryptMensagemService {
    constructor() {}
    
    decryptMensagem(mensagemEncryptada: string): string {
        return mensagemEncryptada;
        //return mensagemDecryptada;
    }
}