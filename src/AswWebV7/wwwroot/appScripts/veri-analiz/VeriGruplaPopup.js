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
var ModalDialogInstance_1 = require('../lib/angular2-modal/models/ModalDialogInstance');
var VeriAnalizIletisimci_1 = require('./VeriAnalizIletisimci');
var Kolonlar_1 = require('./Kolonlar');
var VeriGruplaPopup = (function () {
    function VeriGruplaPopup(_vaIletisimci, dialog) {
        this._vaIletisimci = _vaIletisimci;
        this.dialog = dialog;
    }
    VeriGruplaPopup.prototype.TamamTiklandi = function () {
        console.log("VeriGruplaPopup tamam tıklandı");
        this.dialog.close();
    };
    VeriGruplaPopup.prototype.ngOnInit = function () {
        $('.scrollable').each(function () {
            var $this = $(this);
            $(this).ace_scroll({
                size: $this.attr('data-size') || 100
            });
        });
    };
    VeriGruplaPopup = __decorate([
        core_1.Component({
            selector: 'modal-content',
            directives: [Kolonlar_1.KOLONLAR],
            encapsulation: core_1.ViewEncapsulation.None,
            //directives: [CORE_DIRECTIVES, Kolonlar],
            templateUrl: './templates/VeriGruplaPopup.html'
        }), 
        __metadata('design:paramtypes', [VeriAnalizIletisimci_1.VeriAnalizIletisimci, ModalDialogInstance_1.ModalDialogInstance])
    ], VeriGruplaPopup);
    return VeriGruplaPopup;
})();
exports.VeriGruplaPopup = VeriGruplaPopup;
//# sourceMappingURL=VeriGruplaPopup.js.map