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
var VeriAnalizIletisimci_1 = require('./VeriAnalizIletisimci');
var AnalizCalisma_1 = require('./AnalizCalisma');
var ModalConfig_1 = require('../lib/angular2-modal/models/ModalConfig');
var Modal_1 = require('../lib/angular2-modal/providers/Modal');
var ICustomModal_1 = require('../lib/angular2-modal/models/ICustomModal');
var KolonEklePopup_1 = require('./KolonEklePopup');
var VeriGruplaPopup_1 = require('./VeriGruplaPopup');
var YeniCalismaComponent = (function () {
    function YeniCalismaComponent(_vaIletisimci, modal, elementRef, injector, _renderer) {
        this._vaIletisimci = _vaIletisimci;
        this.modal = modal;
        this.elementRef = elementRef;
        this.injector = injector;
        this._renderer = _renderer;
        this.calisma = new AnalizCalisma_1.Calisma();
    }
    YeniCalismaComponent.prototype.ngOnInit = function () {
        this.IslenmisVeriAl();
    };
    YeniCalismaComponent.prototype.IslenmisVeriAl = function () {
        var _this = this;
        this._vaIletisimci.IslenmisVeriAl().then(function (va) { return _this.calisma = va; });
    };
    YeniCalismaComponent.prototype.kolonEkle = function () {
        var _this = this;
        var dialog;
        var bindings = core_1.Injector.resolve([
            //provide(ICustomModal, { useValue: new AdditionCalculateWindowData(2, 3) })
            core_1.provide(ICustomModal_1.ICustomModal, {})
        ]);
        dialog = this.modal.open(KolonEklePopup_1.KolonEklePopup, bindings, new ModalConfig_1.ModalConfig("lg", true, 27));
        dialog.then(function (resultPromise) {
            return resultPromise.result.then(function (result) {
                _this.lastModalResult = result;
            }, function () { return _this.lastModalResult = 'Rejected!'; });
        });
    };
    YeniCalismaComponent.prototype.veriGrupla = function () {
        var _this = this;
        var dialog;
        var bindings = core_1.Injector.resolve([
            //provide(ICustomModal, { useValue: new AdditionCalculateWindowData(2, 3) })
            core_1.provide(ICustomModal_1.ICustomModal, {})
        ]);
        dialog = this.modal.open(VeriGruplaPopup_1.VeriGruplaPopup, bindings, new ModalConfig_1.ModalConfig("lg", true, 27));
        dialog.then(function (resultPromise) {
            return resultPromise.result.then(function (result) {
                _this.lastModalResult = result;
            }, function () { return _this.lastModalResult = 'Rejected!'; });
        });
    };
    YeniCalismaComponent = __decorate([
        core_1.Component({
            selector: 'yeni-calisma',
            providers: [Modal_1.Modal],
            templateUrl: 'templates/yeni-veri-analiz-calismasi.html',
            styles: ["\n    .calismaSecenekler div button {\n      margin: 13px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [VeriAnalizIletisimci_1.VeriAnalizIletisimci, Modal_1.Modal, core_1.ElementRef, core_1.Injector, core_1.Renderer])
    ], YeniCalismaComponent);
    return YeniCalismaComponent;
})();
exports.YeniCalismaComponent = YeniCalismaComponent;
//# sourceMappingURL=YeniCalismaComponent.js.map