import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { TrainService } from './services/train.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TrainService
  ]
})
export class AppComponent {
  title = 'Summerit';
}