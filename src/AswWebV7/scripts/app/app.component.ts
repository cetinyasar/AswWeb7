import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {OncekiCalismalarComp} from './veri-analiz/va.onceki.calismalar';

@Component({
    selector: 'my-app',
    templateUrl:'../templates/ana-sayfa.html',

  //template: `
  //  <h1>{{title}}</h1>
  //  <a [routerLink]="['Dashboard']">Dashboard</a>
  //  <a [routerLink]="['Heroes']">Heroes</a>
  //  <router-outlet></router-outlet>
  //`,
  
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  { path: '/vaoncekicalisma', name: 'VaOncekiCalisma', component: OncekiCalismalarComp},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
  public title = 'Tour of Heroes';
}

