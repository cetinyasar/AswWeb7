import {Injectable} from 'angular2/core';
import {AnalizCalismalari} from '../mock/mock-analiz-calismalari';

@Injectable()
export class VeriAnalizIletisimci {
    kullaniciKayitliVeriAnalizCalismalariniAl() {
        return Promise.resolve(AnalizCalismalari);
    }

}
