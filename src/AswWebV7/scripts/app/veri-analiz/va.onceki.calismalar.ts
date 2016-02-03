import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {AnalizCalisma} from './AnalizCalisma'

declare var $: any;
@Component({
    selector: 'onceki-calismalar',
    template: '<table class="table table-striped responsive-utilities jambo_table bulk_action">' +
        '<thead>' +
        '<tr class="headings">' +
        '<th>' +
        '<input type="checkbox" id="check-all" class="flat" />' +
        '</th>' +
        '<th class="column-title">Id </th>' +
        '<th class="column-title">Açıklama</th>' +
        '<th class="column-title">Tarih</th>' +
        '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr class="even pointer" *ngFor="#va of veriAnalizCalismalari">' +
    '<td class="a-center "><input type="checkbox" class="flat" name="table_records"></td>' +
    '<td class=" ">{{va.Id}}</td>' +
    '<td class=" ">{{va.CalismaAdi}}</td>' +
    '<td class=" ">{{va.Tarih}}</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>',
    styleUrls: ['../style/table.css']
})
export class OncekiCalismalarComp implements OnInit {
    public veriAnalizCalismalari: AnalizCalisma[];

    constructor(private _vaIletisimci: VeriAnalizIletisimci, private _router: Router) {}

    kullaniciKayitliVeriAnalizCalismalariniAl() {
        this._vaIletisimci.kullaniciKayitliVeriAnalizCalismalariniAl().then(va => this.veriAnalizCalismalari = va);
    }

    ngOnInit() {
        this.kullaniciKayitliVeriAnalizCalismalariniAl();
    }
}