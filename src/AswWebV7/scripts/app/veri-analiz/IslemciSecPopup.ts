import {Component, Input, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Modal} from '../lib/angular2-modal/providers/Modal';
import {ModalDialogInstance} from '../lib/angular2-modal/models/ModalDialogInstance';
import {ICustomModal, ICustomModalComponent} from '../lib/angular2-modal/models/ICustomModal';

import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'

import {Islemci} from './Islemci'

declare var $: any;

@Component({
    selector: 'modal-content',
    directives: [CORE_DIRECTIVES],
    styles: [],
    templateUrl: './templates/IslemciSecPopup.html'
})
export class IslemciSecPopup implements OnInit, ICustomModalComponent {
    dialog: ModalDialogInstance;
    Islemciler: Array<Islemci>;

    constructor(private _vaIletisimci: VeriAnalizIletisimci, dialog: ModalDialogInstance) {
        this.dialog = dialog;
    }

    TamamTiklandi(): void {
        console.log("tamam tıklandı");
        this.dialog.close();
    }

    ngOnInit() {
        $('.scrollable').each(function () {
            var $this = $(this);
            $(this).ace_scroll({
                size: $this.attr('data-size') || 100
            });
        });
        this._vaIletisimci.KullanilabilecekIslemcileriAl().then(va => this.Islemciler = va);
    }
}