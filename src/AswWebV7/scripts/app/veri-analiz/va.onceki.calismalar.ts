import {Component, OnInit, AfterContentChecked} from 'angular2/core';
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
export class OncekiCalismalarComp implements OnInit, AfterContentChecked {
    public veriAnalizCalismalari: AnalizCalisma[];

    constructor(private _vaIletisimci: VeriAnalizIletisimci, private _router: Router) {}

    kullaniciKayitliVeriAnalizCalismalariniAl() {
        this._vaIletisimci.kullaniciKayitliVeriAnalizCalismalariniAl().then(va => this.veriAnalizCalismalari = va);
    }

    ngAfterContentChecked() {
        //if ($("input.flat")[0]) {
        //    $(document).ready(function () {
        //        $('input.flat').iCheck({
        //            checkboxClass: 'icheckbox_flat-green',
        //            radioClass: 'iradio_flat-green'
        //        });
        //    });
        //}

        //$('table input').on('ifChecked', function () {
        //    this.check_state = '';
        //    $(this).parent().parent().parent().addClass('selected');
        //    this.countChecked();
        //});
        //$('table input').on('ifUnchecked', function () {
        //    this.check_state = '';
        //    $(this).parent().parent().parent().removeClass('selected');
        //    this.countChecked();
        //});
        
        //$('.bulk_action input').on('ifChecked', function () {
        //    this.check_state = '';
        //    $(this).parent().parent().parent().addClass('selected');
        //    this.countChecked();
        //});
        //$('.bulk_action input').on('ifUnchecked', function () {
        //    this.check_state = '';
        //    $(this).parent().parent().parent().removeClass('selected');
        //    this.countChecked();
        //});
        //$('.bulk_action input#check-all').on('ifChecked', function () {
        //    this.check_state = 'check_all';
        //    this.countChecked();
        //});
        //$('.bulk_action input#check-all').on('ifUnchecked', function () {
        //    this.check_state = 'uncheck_all';
        //    this.countChecked();
        //});

    }

    check_state = '';
    ngOnInit() {
        //alert("on init");
        this.kullaniciKayitliVeriAnalizCalismalariniAl();
       
    }

    //countChecked() {
    //    if (this.check_state == 'check_all') {
    //        $(".bulk_action input[name='table_records']").iCheck('check');
    //    }
    //    if (this.check_state == 'uncheck_all') {
    //        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    //    }7
    //    var n = $(".bulk_action input[name='table_records']:checked").length;
    //    if (n > 0) {
    //        $('.column-title').hide();
    //        $('.bulk-actions').show();
    //        $('.action-cnt').html(n + ' Records Selected');
    //    } else {
    //        $('.column-title').show();
    //        $('.bulk-actions').hide();
    //    }
    //}

}