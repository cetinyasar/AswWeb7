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
var AnalizCalisma_1 = require('./AnalizCalisma');
var YeniCalismaComp = (function () {
    function YeniCalismaComp(_vaIletisimci, _router) {
        this._vaIletisimci = _vaIletisimci;
        this._router = _router;
        this.calisma = new AnalizCalisma_1.Calisma();
    }
    YeniCalismaComp.prototype.IslenmisVeriAl = function () {
        var _this = this;
        this._vaIletisimci.IslenmisVeriAl().then(function (va) { return _this.calisma = va; });
    };
    YeniCalismaComp.prototype.ngOnInit = function () {
        this.IslenmisVeriAl();
    };
    YeniCalismaComp.prototype.kolonEkle = function () {
        console.log("click");
        alert("click");
    };
    YeniCalismaComp = __decorate([
        core_1.Component({
            selector: 'yeni-calisma',
            templateUrl: 'templates/yeni-veri-analiz-calismasi22.html',
            styles: ["\n    .calismaSecenekler div button {\n      margin: 13px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [VeriAnalizIletisimci_1.VeriAnalizIletisimci, router_1.Router])
    ], YeniCalismaComp);
    return YeniCalismaComp;
})();
exports.YeniCalismaComp = YeniCalismaComp;
//# sourceMappingURL=va.yeni.calisma.js.map