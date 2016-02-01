var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var VeriAnalizIletisimci_1 = require('./VeriAnalizIletisimci');
var OncekiCalismalarComp = (function () {
    function OncekiCalismalarComp(_vaIletisimci, _router) {
        this._vaIletisimci = _vaIletisimci;
        this._router = _router;
        this.check_state = '';
    }
    OncekiCalismalarComp.prototype.kullaniciKayitliVeriAnalizCalismalariniAl = function () {
        var _this = this;
        this._vaIletisimci.kullaniciKayitliVeriAnalizCalismalariniAl().then(function (va) { return _this.veriAnalizCalismalari = va; });
    };
    OncekiCalismalarComp.prototype.ngAfterContentChecked = function () {
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
    };
    OncekiCalismalarComp.prototype.ngOnInit = function () {
        //alert("on init");
        this.kullaniciKayitliVeriAnalizCalismalariniAl();
    };
    OncekiCalismalarComp = __decorate([
        core_1.Component({
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
        }), 
        __metadata('design:paramtypes', [VeriAnalizIletisimci_1.VeriAnalizIletisimci, router_1.Router])
    ], OncekiCalismalarComp);
    return OncekiCalismalarComp;
})();
exports.OncekiCalismalarComp = OncekiCalismalarComp;
//# sourceMappingURL=va.onceki.calismalar.js.map