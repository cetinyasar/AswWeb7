var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var dashboard_component_1 = require('./dashboard.component');
var va_onceki_calismalar_1 = require('./veri-analiz/va.onceki.calismalar');
var va_yeni_calisma_1 = require('./veri-analiz/va.yeni.calisma');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Asw';
    }
    AppComponent.prototype.ngOnInit = function () {
        //$("#menu-toggle").click(function (e) {
        //    e.preventDefault();
        //    $("#wrapper").toggleClass("toggled");
        //});
        //$("#menu-toggle-2").click(function (e) {
        //    e.preventDefault();
        //    $("#wrapper").toggleClass("toggled-2");
        //    $('#menu ul').hide();
        //});        
        //this.initMenu();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../templates/ana-sayfa.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
            { path: '/vaoncekicalisma', name: 'VaOncekiCalisma', component: va_onceki_calismalar_1.OncekiCalismalarComp },
            { path: '/vayenicalisma', name: 'VaYeniCalisma', component: va_yeni_calisma_1.YeniCalismaComp },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map