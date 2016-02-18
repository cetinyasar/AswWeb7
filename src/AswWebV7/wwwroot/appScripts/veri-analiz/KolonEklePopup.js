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
var common_1 = require('angular2/common');
var Modal_1 = require('../lib/angular2-modal/providers/Modal');
var ModalDialogInstance_1 = require('../lib/angular2-modal/models/ModalDialogInstance');
var ICustomModal_1 = require('../lib/angular2-modal/models/ICustomModal');
var VeriAnalizIletisimci_1 = require('./VeriAnalizIletisimci');
var YeniKolonBilgisi_1 = require('./YeniKolonBilgisi');
var IslemciSecPopup_1 = require('./IslemciSecPopup');
var ModalConfig_1 = require('../lib/angular2-modal/models/ModalConfig');
var KolonEklePopup = (function () {
    function KolonEklePopup(_vaIletisimci, dialog, injector, _renderer, modal) {
        this._vaIletisimci = _vaIletisimci;
        this.injector = injector;
        this._renderer = _renderer;
        this.modal = modal;
        this.dialog = dialog;
        this.YeniKolonBilgisi = new Array();
    }
    KolonEklePopup.prototype.YeniKolonEkle = function () {
        this.YeniKolonBilgisi.push(new YeniKolonBilgisi_1.YeniKolonBilgisi());
    };
    KolonEklePopup.prototype.TamamTiklandi = function () {
        console.log("tamam tıklandı");
        this.dialog.close();
    };
    KolonEklePopup.prototype.IslemciSec = function () {
        var _this = this;
        var dialog;
        var bindings = core_1.Injector.resolve([
            core_1.provide(ICustomModal_1.ICustomModal, {})
        ]);
        dialog = this.modal.open(IslemciSecPopup_1.IslemciSecPopup, bindings, new ModalConfig_1.ModalConfig("lg", true, 27));
        dialog.then(function (resultPromise) {
            return resultPromise.result.then(function (result) {
                _this.lastModalResult = result;
            }, function () { return _this.lastModalResult = 'Rejected!'; });
        });
    };
    KolonEklePopup.prototype.ngOnInit = function () {
        var _this = this;
        $('.scrollable').each(function () {
            var $this = $(this);
            $(this).ace_scroll({
                size: $this.attr('data-size') || 100
            });
        });
        this._vaIletisimci.KullanilabilecekIslemcileriAl().then(function (va) { return _this.Islemciler = va; });
        this.YeniKolonBilgisi = new Array();
        this.YeniKolonBilgisi.push(new YeniKolonBilgisi_1.YeniKolonBilgisi());
    };
    KolonEklePopup = __decorate([
        core_1.Component({
            selector: 'modal-content',
            providers: [Modal_1.Modal],
            directives: [common_1.CORE_DIRECTIVES],
            styles: [],
            templateUrl: './templates/KolonEklePopup.html'
        }), 
        __metadata('design:paramtypes', [VeriAnalizIletisimci_1.VeriAnalizIletisimci, ModalDialogInstance_1.ModalDialogInstance, core_1.Injector, core_1.Renderer, Modal_1.Modal])
    ], KolonEklePopup);
    return KolonEklePopup;
})();
exports.KolonEklePopup = KolonEklePopup;
//# sourceMappingURL=KolonEklePopup.js.map