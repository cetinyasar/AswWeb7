import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
//import {Hero} from './hero';
//import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  template: '<h1>Asw Web V3</h1>'
})
export class DashboardComponent implements OnInit {
  //public heroes: Hero[] = [];

  //constructor(private _heroService: HeroService, private _router: Router) { }

  ngOnInit() {
    //this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

  //gotoDetail(hero: Hero) {
    //this._router.navigate(['HeroDetail', { id: hero.id }]);
  //}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/