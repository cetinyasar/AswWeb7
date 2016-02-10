var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var VeriAnalizIletisimci_1 = require('./veri-analiz/VeriAnalizIletisimci');
var app_component_1 = require('./app.component');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    VeriAnalizIletisimci_1.VeriAnalizIletisimci
]);
//# sourceMappingURL=main.js.map