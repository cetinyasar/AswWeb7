import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {VeriAnalizIletisimci} from './veri-analiz/VeriAnalizIletisimci';
import {Dragula} from './lib/angular2-dragula/directives/dragula.directive';
import {AppComponent} from './app.component';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
    VeriAnalizIletisimci,
    Dragula
]);

