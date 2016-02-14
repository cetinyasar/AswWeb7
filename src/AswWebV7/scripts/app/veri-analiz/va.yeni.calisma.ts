import { Component, OnInit, provide, ElementRef, Injector,
IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';

import {Router} from 'angular2/router';
import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {Calisma} from './AnalizCalisma'

import {YesNoModalContent, YesNoModal} from '../lib/angular2-modal/commonModals/yesNoModal';
import {ModalDialogInstance} from '../lib/angular2-modal/models/ModalDialogInstance';
import {ModalConfig} from '../lib/angular2-modal/models/ModalConfig';
import {Modal} from '../lib/angular2-modal/providers/Modal';
import {ICustomModal} from '../lib/angular2-modal/models/ICustomModal';
import {KolonEklePopup} from './KolonEklePopup'
import {VeriGruplaPopup} from './VeriGruplaPopup'

declare var $: any;
@Component({
    selector: 'yeni-calisma',
    providers: [Modal],
    templateUrl: 'templates/yeni-veri-analiz-calismasi.html',
    styles: [`
    .calismaSecenekler div button {
      margin: 13px;
    }
  `]
})
export class YeniCalismaComp implements OnInit {
    public calisma: Calisma;
    public lastModalResult: string;

    constructor(private _vaIletisimci: VeriAnalizIletisimci, private modal: Modal, private elementRef: ElementRef,
        private injector: Injector, private _renderer: Renderer) {
        this.calisma = new Calisma();
    }

    ngOnInit() {
        this.IslenmisVeriAl();
    }

    IslenmisVeriAl() {
        this._vaIletisimci.IslenmisVeriAl().then(va => this.calisma = va);

    }

    kolonEkle() {
        let dialog: Promise<ModalDialogInstance>;

        let bindings = Injector.resolve([
            //provide(ICustomModal, { useValue: new AdditionCalculateWindowData(2, 3) })
            provide(ICustomModal, { })
        ]);

        dialog = this.modal.open(
            <any>KolonEklePopup,
             bindings,
             new ModalConfig("lg", true, 27));

        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }

    veriGrupla() {
        let dialog: Promise<ModalDialogInstance>;

        let bindings = Injector.resolve([
            //provide(ICustomModal, { useValue: new AdditionCalculateWindowData(2, 3) })
            provide(ICustomModal, {})
        ]);

        dialog = this.modal.open(
            <any>VeriGruplaPopup,
            bindings,
            new ModalConfig("lg", true, 27));

        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }
}