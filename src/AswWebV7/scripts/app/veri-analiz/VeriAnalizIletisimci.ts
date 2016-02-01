import {Injectable} from 'angular2/core';
import {AnalizCalismalari, AnalizCalismasi} from '../mock/mock-analiz-calismalari';

@Injectable()
export class VeriAnalizIletisimci {
    kullaniciKayitliVeriAnalizCalismalariniAl() {
        return Promise.resolve(AnalizCalismalari);
    }

    IslenmisVeriAl() {
        console.log("sssss");
        return Promise.resolve(AnalizCalismasi);
    }

}
