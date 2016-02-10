import { Islemci } from '../veri-analiz/Islemci';

export var Islemciler: Islemci[] = [
    {
        SinifAdi: "PoliceninHasarBilgisiSatiriIslemleri",
        OnEk: "phsr",
        IslemciKolonBilgileri: [
            { KolonAciklama: "Acente numarası kolonu", KolonAdi: "" },
            { KolonAciklama: "Poliçe numarası kolonu", KolonAdi: "" },
            { KolonAciklama: "Tecdit numarası kolonu", KolonAdi: "" },
            { KolonAciklama: "Zeyil numarası kolonu", KolonAdi: "" }
        ]
    },
    {
        SinifAdi: "PoliceBilgisiSatirIslemleri",
        OnEk: "pol",
        IslemciKolonBilgileri: [
            { KolonAciklama: "Acente numarası kolonu", KolonAdi: "" },
            { KolonAciklama: "Poliçe numarası kolonu", KolonAdi: "" },
            { KolonAciklama: "Tecdit numarası kolonu", KolonAdi: "" },
            { KolonAciklama: "Zeyil numarası kolonu", KolonAdi: "" }
        ]
    },
    {
        SinifAdi: "HasarBilgisiSatirIslemleri",
        OnEk: "hsr",
        IslemciKolonBilgileri: [
            { KolonAciklama: "Hasar kodu kolonu", KolonAdi: "" },
            { KolonAciklama: "Hasar yılı kolonu", KolonAdi: "" },
            { KolonAciklama: "Hasar dosya no kolonu", KolonAdi: "" },
            { KolonAciklama: "Hasar sıra no kolonu", KolonAdi: "" }
        ]
    }
];
