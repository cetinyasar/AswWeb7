import { Component, OnInit, provide, ElementRef, Injector,
IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';

import {CORE_DIRECTIVES} from 'angular2/common';

import {Modal} from '../lib/angular2-modal/providers/Modal';
import {ModalDialogInstance} from '../lib/angular2-modal/models/ModalDialogInstance';
import {ICustomModal, ICustomModalComponent} from '../lib/angular2-modal/models/ICustomModal';

import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {YeniKolonBilgisi} from './YeniKolonBilgisi'
import {IslemciSecPopup} from './IslemciSecPopup'
import {ModalConfig} from '../lib/angular2-modal/models/ModalConfig';
import {Islemci} from './Islemci'

declare var $: any;

@Component({
    selector: 'modal-content',
    providers: [Modal],
    directives: [CORE_DIRECTIVES],
    styles: [],
    templateUrl:'./templates/KolonEklePopup.html'
})
export class KolonEklePopup implements OnInit, ICustomModalComponent {
    dialog: ModalDialogInstance;
    YeniKolonBilgisi: Array<YeniKolonBilgisi>;
    Islemciler : Array<Islemci>;
    
    public lastModalResult: string;

    constructor(private _vaIletisimci: VeriAnalizIletisimci, dialog: ModalDialogInstance,
        private injector: Injector, private _renderer: Renderer, private modal: Modal) {
        this.dialog = dialog;
        this.YeniKolonBilgisi = new Array<YeniKolonBilgisi>();
    }

    YeniKolonEkle(): void {
        this.YeniKolonBilgisi.push(new YeniKolonBilgisi());
    }

    TamamTiklandi(): void {
        console.log("tamam tıklandı");
        this.dialog.close();
    }

    IslemciSec(): void {
        
        let dialog: Promise<ModalDialogInstance>;

        let bindings = Injector.resolve([
            provide(ICustomModal, {})
        ]);

        dialog = this.modal.open(
            <any>IslemciSecPopup,
            bindings,
            new ModalConfig("lg", true, 27));

        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });

    }

    ngOnInit() {
        $('.scrollable').each(function() {
            var $this = $(this);
            $(this).ace_scroll({
                size: $this.attr('data-size') || 100
            });
        });

        this._vaIletisimci.KullanilabilecekIslemcileriAl().then(va => this.Islemciler = va);

        this.YeniKolonBilgisi = new Array<YeniKolonBilgisi>();
        this.YeniKolonBilgisi.push(new YeniKolonBilgisi());
    }
}