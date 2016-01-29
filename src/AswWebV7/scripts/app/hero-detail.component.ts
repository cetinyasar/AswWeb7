import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
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
})
export class HeroDetailComponent implements OnInit {
    public hero: Hero;

    constructor(private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.hero) {
            let id = +this._routeParams.get('id');
            this._heroService.getHero(id).then(hero => this.hero = hero);
        }
    }

    goBack() {
        window.history.back();
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/