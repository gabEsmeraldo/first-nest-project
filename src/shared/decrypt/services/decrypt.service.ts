import { Injectable } from "@nestjs/common";

@Injectable()
export class DecryptService{
    async decrypt(encrypted_string: string): Promise<string> {
        const default_list: string = "abcdefghijklmnopqrstuvwxyz123456790 "
        const secret_key: string = "nzsdylxc9r3f0wg1i aeb2v7kq46ojphumt5"
        let decrypted_string: string = "";
        encrypted_string = encrypted_string.toLowerCase();
        for(let index:number = 0; index < encrypted_string.length; index++){
            decrypted_string += default_list[secret_key.indexOf(encrypted_string.slice(index, index+1))];
        }
        return decrypted_string;
    }
}