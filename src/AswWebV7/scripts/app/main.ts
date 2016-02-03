import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {VeriAnalizIletisimci} from './veri-analiz/VeriAnalizIletisimci';
import {AppComponent} from './app.component';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
    VeriAnalizIletisimci
]);

