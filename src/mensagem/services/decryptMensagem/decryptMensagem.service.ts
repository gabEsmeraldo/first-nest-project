import { Injectable } from "@nestjs/common";

@Injectable()
export class DecryptMensagemService {
    constructor() {}
    
    decryptMensagem(mensagemEncryptada: String): String {
        return mensagemEncryptada;
        //return mensagemDecryptada;
    }
}