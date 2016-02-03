(function (KolonTip) {
    KolonTip[KolonTip["Int"] = 0] = "Int";
    KolonTip[KolonTip["Bool"] = 1] = "Bool";
    KolonTip[KolonTip["String"] = 2] = "String";
    KolonTip[KolonTip["DateTime"] = 3] = "DateTime";
    KolonTip[KolonTip["Decimal"] = 4] = "Decimal";
})(exports.KolonTip || (exports.KolonTip = {}));
var KolonTip = exports.KolonTip;
var KolonDetay = (function () {
    function KolonDetay() {
    }
    return KolonDetay;
})();
exports.KolonDetay = KolonDetay;
var AdaVeri = (function () {
    function AdaVeri() {
        this.Kayitlar = [];
        this.Kolonlar = [];
        this.ToplamSatir = [];
    }
    return AdaVeri;
})();
exports.AdaVeri = AdaVeri;
var VeriIstekSonuc = (function () {
    function VeriIstekSonuc() {
        this.OlusturulanVeri = new AdaVeri();
    }
    return VeriIstekSonuc;
})();
exports.VeriIstekSonuc = VeriIstekSonuc;
var Calisma = (function () {
    function Calisma() {
        this.VeriIstekSonuc = new VeriIstekSonuc();
    }
    return Calisma;
})();
exports.Calisma = Calisma;
//# sourceMappingURL=AnalizCalisma.js.map