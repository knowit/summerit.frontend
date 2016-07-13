import { Component, Input } from '@angular/core';
import { Train } from './train';

@Component({
  selector: 'my-train-detail',
  template: `
    <div *ngIf="train">
      <h2>{{train.name}} details!</h2>
      <div><label>id: </label>{{train.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="train.name" placeholder="name"/>
      </div>
      <div><label>wall: </label>{{train.raspberrypi}}</div>
      <div><label>distance: </label>{{train.distance}}</div>
    </div>
  `
})
export class TrainDetailComponent {
  @Input()
  train: Train;
}