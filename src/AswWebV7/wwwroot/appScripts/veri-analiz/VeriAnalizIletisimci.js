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
var mock_analiz_calismalari_1 = require('../mock/mock-analiz-calismalari');
var mock_islemciler_1 = require('../mock/mock-islemciler');
var VeriAnalizIletisimci = (function () {
    function VeriAnalizIletisimci() {
    }
    VeriAnalizIletisimci.prototype.kullaniciKayitliVeriAnalizCalismalariniAl = function () {
        return Promise.resolve(mock_analiz_calismalari_1.AnalizCalismalari);
    };
    VeriAnalizIletisimci.prototype.IslenmisVeriAl = function () {
        return Promise.resolve(mock_analiz_calismalari_1.AnalizCalismasi);
    };
    VeriAnalizIletisimci.prototype.KullanilabilecekIslemcileriAl = function () {
        return Promise.resolve(mock_islemciler_1.Islemciler);
    };
    VeriAnalizIletisimci = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VeriAnalizIletisimci);
    return VeriAnalizIletisimci;
})();
exports.VeriAnalizIletisimci = VeriAnalizIletisimci;
//# sourceMappingURL=VeriAnalizIletisimci.js.map