import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {AnalizCalisma} from './AnalizCalisma'

@Component({
    selector: 'onceki-calismalar',
    template: '<h3>ONCEKI CALISMALAR</h3>'
})
export class OncekiCalismalarComp implements OnInit {
    public veriAnalizCalismalari: AnalizCalisma[];
    //public selectedHero: Hero;

    constructor(private _vaIletisimci: VeriAnalizIletisimci, private _router: Router) { }

    kullaniciKayitliVeriAnalizCalismalariniAl() {
        this._vaIletisimci.kullaniciKayitliVeriAnalizCalismalariniAl().then(va => this.veriAnalizCalismalari = va);
    }

    ngOnInit() {
        this.kullaniciKayitliVeriAnalizCalismalariniAl();
    }

}