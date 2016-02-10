var MevcutIslemci = (function () {
    function MevcutIslemci(sinifAdi, onEk, gerekliKolonAciklamalari, gerekliKolonAdlari) {
        this.GerekliKolonBilgileri = [];
        this.TumKolonlar = [];
        this.SinifAdi = sinifAdi;
        this.OnEk = onEk;
        this.GerekliKolonAciklamalari = gerekliKolonAciklamalari;
        this.GerekliKolonAdlari = gerekliKolonAdlari;
    }
    MevcutIslemci.MevcutOlustur = function () {
        var retVal = new Array();
        retVal.push(new MevcutIslemci("PoliceninHasarBilgisiSatiriIslemleri", "phsr", [
            new GerekliKolonBilgileri("Acente numarası kolonu", ""),
            new GerekliKolonBilgileri("Poliçe numarası kolonu", ""),
            new GerekliKolonBilgileri("Tecdit numarası kolonu", ""),
            new GerekliKolonBilgileri("Zeyil numarası kolonu", "")
        ], ""));
        retVal.push(new MevcutIslemci("PoliceBilgisiSatirIslemleri", "pol", [
            new GerekliKolonBilgileri("Acente numarası kolonu", ""),
            new GerekliKolonBilgileri("Poliçe numarası kolonu", ""),
            new GerekliKolonBilgileri("Tecdit numarası kolonu", ""),
            new GerekliKolonBilgileri("Zeyil numarası kolonu", "")
        ], ""));
        retVal.push(new MevcutIslemci("HasarBilgisiSatirIslemleri", "hsr", [
            new GerekliKolonBilgileri("Hasar Kodu kolonu", ""),
            new GerekliKolonBilgileri("Hasar Yılı kolonu", ""),
            new GerekliKolonBilgileri("Hasar Dosya No kolonu", ""),
            new GerekliKolonBilgileri("Hasar Sıra No kolonu", "")
        ], ""));
        return retVal;
    };
    return MevcutIslemci;
})();
exports.MevcutIslemci = MevcutIslemci;
var GerekliKolonBilgileri = (function () {
    function GerekliKolonBilgileri(kolonAciklamasi, kolonAdi) {
        this.KolonAciklama = kolonAciklamasi;
        this.KolonAdi = kolonAdi;
    }
    return GerekliKolonBilgileri;
})();
exports.GerekliKolonBilgileri = GerekliKolonBilgileri;
var EklenecekIslemci = (function () {
    function EklenecekIslemci() {
        this.IslemciAdi = "";
        this.OnEk = "";
        this.GerekliKolonAciklamalari = [];
        this.TumKolonlarEslesmeBulundu = false;
        this.Goster = false;
    }
    EklenecekIslemci.prototype.TumKolonlarEslesmeBulunduAyarla = function () {
        for (var i = 0; i < this.GerekliKolonAciklamalari.length; i++) {
            //console.log(this.GerekliKolonAciklamalari[i].KolonAdi);
            if (this.GerekliKolonAciklamalari[i].KolonAdi == "") {
                this.TumKolonlarEslesmeBulundu = false;
                return false;
            }
        }
        this.TumKolonlarEslesmeBulundu = true;
        return true;
    };
    return EklenecekIslemci;
})();
exports.EklenecekIslemci = EklenecekIslemci;
//# sourceMappingURL=MevcutIslemci.js.map