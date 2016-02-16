import {Component, Input, OnInit, ViewEncapsulation} from 'angular2/core';
//import {CORE_DIRECTIVES} from 'angular2/common';

import {Modal} from '../lib/angular2-modal/providers/Modal';
import {ModalDialogInstance} from '../lib/angular2-modal/models/ModalDialogInstance';
import {ICustomModal, ICustomModalComponent} from '../lib/angular2-modal/models/ICustomModal';

import {VeriAnalizIletisimci} from './VeriAnalizIletisimci'
import {KOLONLAR} from './Kolonlar'

declare var $: any;

@Component({
    selector: 'modal-content',
    directives: [KOLONLAR],
    encapsulation: ViewEncapsulation.None,
    //directives: [CORE_DIRECTIVES, Kolonlar],
    templateUrl: './templates/VeriGruplaPopup.html'

})
export class VeriGruplaPopup implements OnInit, ICustomModalComponent {
    dialog: ModalDialogInstance;

    constructor(private _vaIletisimci: VeriAnalizIletisimci, dialog: ModalDialogInstance) {
        this.dialog = dialog;

    }

    TamamTiklandi(): void {
        console.log("VeriGruplaPopup tamam tıklandı");
        this.dialog.close();
    }

    ngOnInit() {
        $('.scrollable').each(function () {
            var $this = $(this);
            $(this).ace_scroll({
                size: $this.attr('data-size') || 100
            });
        });
        
    }
}