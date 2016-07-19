import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { TrainService } from './services/train.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/trains']" routerLinkActive="active">Tog</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TrainService
  ]
})
export class AppComponent {
  title = 'Summerit';
}