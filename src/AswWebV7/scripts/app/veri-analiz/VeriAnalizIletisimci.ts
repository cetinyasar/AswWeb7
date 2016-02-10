import {Injectable} from 'angular2/core';
import {AnalizCalismalari, AnalizCalismasi} from '../mock/mock-analiz-calismalari';
import {Islemciler} from '../mock/mock-islemciler'


@Injectable()
export class VeriAnalizIletisimci {
    kullaniciKayitliVeriAnalizCalismalariniAl() {
        return Promise.resolve(AnalizCalismalari);
    }

    IslenmisVeriAl() {
        return Promise.resolve(AnalizCalismasi);
    }

    KullanilabilecekIslemcileriAl() {
        return Promise.resolve(Islemciler);
    }

}
