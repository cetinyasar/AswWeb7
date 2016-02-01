import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {Calisma} from './AnalizCalisma'

declare var $: any;
@Component({
    selector: 'yeni-calisma',
    template: '<table id="dynamic-table" class="table table-striped table-bordered table-hover">' +
    '<thead>' +
    '<tr>' +
    '<th *ngFor="#row of calisma.VeriIstekSonuc.OlusturulanVeri.Kolonlar" >{{row.KolonAdi}}</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr *ngFor="#kayit of calisma.VeriIstekSonuc.OlusturulanVeri.Kayitlar">' +
    '<td *ngFor="#kyt of kayit" >{{kyt}}</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>',
    styleUrls: ['../style/table.css']
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
}