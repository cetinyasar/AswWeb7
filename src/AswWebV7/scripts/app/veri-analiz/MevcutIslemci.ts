export class MevcutIslemci {
    public SinifAdi: string;
    public OnEk: string;
    public GerekliKolonAciklamalari: GerekliKolonBilgileri[];
    public GerekliKolonAdlari: string;
    public GerekliKolonBilgileri = [];
    public TumKolonlar = [];
    constructor(sinifAdi: string, onEk: string, gerekliKolonAciklamalari: GerekliKolonBilgileri[], gerekliKolonAdlari) {
        this.SinifAdi = sinifAdi;
        this.OnEk = onEk;
        this.GerekliKolonAciklamalari = gerekliKolonAciklamalari;
        this.GerekliKolonAdlari = gerekliKolonAdlari;
    }

    static MevcutOlustur(): MevcutIslemci[] {

        var retVal = new Array<MevcutIslemci>();

        retVal.push(
            new MevcutIslemci("PoliceninHasarBilgisiSatiriIslemleri", "phsr", [
                new GerekliKolonBilgileri("Acente numarası kolonu", ""),
                new GerekliKolonBilgileri("Poliçe numarası kolonu", ""),
                new GerekliKolonBilgileri("Tecdit numarası kolonu", ""),
                new GerekliKolonBilgileri("Zeyil numarası kolonu", "")
            ], ""));

        retVal.push(
            new MevcutIslemci("PoliceBilgisiSatirIslemleri", "pol",
                [
                    new GerekliKolonBilgileri("Acente numarası kolonu", ""),
                    new GerekliKolonBilgileri("Poliçe numarası kolonu", ""),
                    new GerekliKolonBilgileri("Tecdit numarası kolonu", ""),
                    new GerekliKolonBilgileri("Zeyil numarası kolonu", "")
                ], ""));

        retVal.push(
            new MevcutIslemci("HasarBilgisiSatirIslemleri", "hsr",
                [
                    new GerekliKolonBilgileri("Hasar Kodu kolonu", ""),
                    new GerekliKolonBilgileri("Hasar Yılı kolonu", ""),
                    new GerekliKolonBilgileri("Hasar Dosya No kolonu", ""),
                    new GerekliKolonBilgileri("Hasar Sıra No kolonu", "")
                ], ""));
        return retVal;

    }
}

export class GerekliKolonBilgileri {
    KolonAciklama: string;
    KolonAdi: string;
    constructor(kolonAciklamasi: string, kolonAdi: string) {
        this.KolonAciklama = kolonAciklamasi;
        this.KolonAdi = kolonAdi;
    }
}

export class EklenecekIslemci {
    IslemciAdi: string;
    OnEk: string;
    GerekliKolonAciklamalari: GerekliKolonBilgileri[];
    TumKolonlarEslesmeBulundu: boolean;
    Goster: boolean;
    constructor() {
        this.IslemciAdi = "";
        this.OnEk = "";
        this.GerekliKolonAciklamalari = [];
        this.TumKolonlarEslesmeBulundu = false;
        this.Goster = false;
    }

    TumKolonlarEslesmeBulunduAyarla() {
        for (var i = 0; i < this.GerekliKolonAciklamalari.length; i++) {
            //console.log(this.GerekliKolonAciklamalari[i].KolonAdi);
            if (this.GerekliKolonAciklamalari[i].KolonAdi == "") {
                this.TumKolonlarEslesmeBulundu = false;
                return false;
            }
        }
        this.TumKolonlarEslesmeBulundu = true;
        return true;

    }
}

