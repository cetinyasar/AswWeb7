import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {OncekiCalismalarComp} from './veri-analiz/va.onceki.calismalar';
import {YeniCalismaComponent} from './veri-analiz/YeniCalismaComponent';

declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: '../templates/ana-sayfa.html',
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
    { path: '/vaoncekicalisma', name: 'VaOncekiCalisma', component: OncekiCalismalarComp },
    { path: '/vayenicalisma', name: 'VaYeniCalisma', component: YeniCalismaComponent },
])


export class AppComponent implements OnInit {
    public title = 'Asw';

    ngOnInit() {
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
    }


    //initMenu() {
    //$('#menu ul').hide();
    //$('#menu ul').children('.current').parent().show();
    //$('#menu li a').click(
    //    function () {
    //        var checkElement = $(this).next();
    //        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    //            return false;
    //        }
    //        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    //            $('#menu ul:visible').slideUp('normal');
    //            checkElement.slideDown('normal');
    //            return false;
    //        }
    //    }
    //);
    //}
}

