export interface AnalizCalisma {
    Id: number;
    CalismaAdi: string;
    Tarih: Date;
    //Icerik: string;
    //Tarih: Date;
    //KullaniciId: number;
    //Otomatik: number;
    //Dallar: Array<AnalizCalismaDali>;
}

export interface AnalizCalismaDali{ }


export enum KolonTip {
    Int = 0,
    Bool = 1,
    String = 2,
    DateTime = 3,
    Decimal = 4,
}

export class KolonDetay {
    KolonAciklama: string;
    KolonAdi: string;
    KolonTipi: string;
    Tip: KolonTip;
}

export class AdaVeri {
    Kayitlar: Array<any>;
    Kolonlar: Array<KolonDetay>;
    ToplamSatir: Array<number>;
    constructor() {
        this.Kayitlar = [];
        this.Kolonlar = [];
        this.ToplamSatir = [];
    }
}
export class VeriIstekSonuc {
    OlusturulanVeri: AdaVeri;
    VeriId: string;
    GosterilmeyenSatirlarVar: boolean;
    VeriKayitAdedi: number;
    Basarili: boolean;
    Mesaj: string;
    constructor() {
        this.OlusturulanVeri = new AdaVeri();
    }
}

export class Calisma {
    Aciklama: string;
    VeriIstekSonuc: VeriIstekSonuc;
    CalismaAgaci: any;
    CalismaDali: any;
    constructor() {
        this.VeriIstekSonuc = new VeriIstekSonuc();
    }
}
