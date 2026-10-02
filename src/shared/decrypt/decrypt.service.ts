import { Injectable } from "@nestjs/common";

@Injectable()
export class DecryptService{
    async decrypt(encrypted_string: string): Promise<string> {
        const default_list: string = "abcdefghijklmnopqrstuvwxyz123456790 "
        const secret_key: string = "nzsdylxc9r3f0wg1i aeb2v7kq46ojphumt5"
        // Codigo para encryptar
        // const secret_key: string = "abcdefghijklmnopqrstuvwxyz123456790 "
        // const default_list: string = "nzsdylxc9r3f0wg1i aeb2v7kq46ojphumt5"

        let decrypted_string: string = "";
        encrypted_string = encrypted_string.toLowerCase();
        while(decrypted_string.length < encrypted_string.length){
            decrypted_string += default_list[secret_key.indexOf(encrypted_string.charAt(decrypted_string.length))];
        }

        console.log(decrypted_string)
        return decrypted_string;
    }
}