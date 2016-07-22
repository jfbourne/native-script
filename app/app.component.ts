import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_PROVIDERS, NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

import {ListComponent} from './list';
import {CreateComponent} from './create';

@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    template: `<page-router-outlet></page-router-outlet>`,
})
@RouteConfig([
    {path: '/list', component: ListComponent, name: 'List', useAsDefault: true},
    {path: '/create', component: CreateComponent, name: 'Create'}
])
export class AppComponent {

}


