import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import {HeroesComponent} from './heroes.component';
//import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
//import {HeroService} from './hero.service';
import {OncekiCalismalarComp} from './veri-analiz/va.onceki.calismalar';
import {YeniCalismaComp} from './veri-analiz/va.yeni.calisma';

declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: '../templates/ana-sayfa.html',
    directives: [ROUTER_DIRECTIVES],
    //providers: [HeroService]
})
@RouteConfig([
    // {path: '/', redirectTo: ['Dashboard'] },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/vaoncekicalisma', name: 'VaOncekiCalisma', component: OncekiCalismalarComp },
    { path: '/vayenicalisma', name: 'VaYeniCalisma', component: YeniCalismaComp },
    //{ path: '/heroes', name: 'Heroes', component: HeroesComponent },
    //{ path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])


export class AppComponent implements OnInit {
    public title = 'Asw';

    ngOnInit() {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#menu-toggle-2").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled-2");
            $('#menu ul').hide();
        });        
        
        this.initMenu();
    }


    initMenu() {
    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    $('#menu li a').click(
        function () {
            var checkElement = $(this).next();
            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                return false;
            }
            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#menu ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                return false;
            }
        }
    );
}
}

