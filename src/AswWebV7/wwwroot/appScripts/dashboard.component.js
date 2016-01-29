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
var hero_service_1 = require('./hero.service');
var DashboardComponent = (function () {
    function DashboardComponent(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        this._router.navigate(['HeroDetail', { id: hero.id }]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            template: '<h3>Top Heroes</h3>' +
                '<div class="grid grid-pad">' +
                '<div *ngFor="#hero of heroes" class="col-1-4" (click)="gotoDetail(hero)">' +
                '<div class="module hero">' +
                '<h4>{{hero.name}}</h4>' +
                '</div>' +
                '</div>' +
                '</div>'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=dashboard.component.js.map