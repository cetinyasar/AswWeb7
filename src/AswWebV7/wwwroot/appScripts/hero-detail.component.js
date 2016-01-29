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
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_heroService, _routeParams) {
        this._heroService = _heroService;
        this._routeParams = _routeParams;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.hero) {
            var id = +this._routeParams.get('id');
            this._heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        }
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: '<div *ngIf="hero">' +
                '<h2>{{hero.name}} details!</h2>' +
                '<div>' +
                '<label>id: </label>{{hero.id}}</div>' +
                '<div>' +
                '<label>name: </label>' +
                '<input [(ngModel)]="hero.name" placeholder="name"/>' +
                '</div>' +
                '<button (click)="goBack()">Back</button>' +
                '</div>',
            inputs: ['hero']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-detail.component.js.map