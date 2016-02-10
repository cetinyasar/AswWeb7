export class Islemci {
    SinifAdi: string;
    OnEk: string;
    IslemciKolonBilgileri: Array<IslemciKolonBilgileri>;
}

export class IslemciKolonBilgileri {
    KolonAciklama: string;
    KolonAdi: string;
    constructor(kolonAciklamasi: string, kolonAdi: string) {
        this.KolonAciklama = kolonAciklamasi;
        this.KolonAdi = kolonAdi;
    }
}

