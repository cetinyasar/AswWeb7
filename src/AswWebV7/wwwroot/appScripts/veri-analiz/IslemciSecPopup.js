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
var ModalDialogInstance_1 = require('../lib/angular2-modal/models/ModalDialogInstance');
var VeriAnalizIletisimci_1 = require('./VeriAnalizIletisimci');
var IslemciSecPopup = (function () {
    function IslemciSecPopup(_vaIletisimci, dialog) {
        this._vaIletisimci = _vaIletisimci;
        this.dialog = dialog;
    }
    IslemciSecPopup.prototype.TamamTiklandi = function () {
        console.log("tamam tıklandı");
        this.dialog.close();
    };
    IslemciSecPopup.prototype.ngOnInit = function () {
        var _this = this;
        $('.scrollable').each(function () {
            var $this = $(this);
            $(this).ace_scroll({
                size: $this.attr('data-size') || 100
            });
        });
        this._vaIletisimci.KullanilabilecekIslemcileriAl().then(function (va) { return _this.Islemciler = va; });
    };
    IslemciSecPopup = __decorate([
        core_1.Component({
            selector: 'modal-content',
            directives: [common_1.CORE_DIRECTIVES],
            styles: [],
            templateUrl: './templates/IslemciSecPopup.html'
        }), 
        __metadata('design:paramtypes', [VeriAnalizIletisimci_1.VeriAnalizIletisimci, ModalDialogInstance_1.ModalDialogInstance])
    ], IslemciSecPopup);
    return IslemciSecPopup;
})();
exports.IslemciSecPopup = IslemciSecPopup;
//# sourceMappingURL=IslemciSecPopup.js.map