import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {Calisma} from './AnalizCalisma'

declare var $: any;
@Component({
    selector: 'yeni-calisma',
    templateUrl: 'templates/yeni-veri-analiz-calismasi22.html',
    styles: [`
    .calismaSecenekler div button {
      margin: 13px;
    }
  `]
})
export class YeniCalismaComp implements OnInit {
    public calisma: Calisma;
    constructor(private _vaIletisimci: VeriAnalizIletisimci, private _router: Router) {
        this.calisma = new Calisma();
    }

    IslenmisVeriAl() {
        this._vaIletisimci.IslenmisVeriAl().then(va => this.calisma = va);

    }
    ngOnInit() {
        this.IslenmisVeriAl();
    }

    kolonEkle() {
        console.log("click");
        alert("click");
    }
}