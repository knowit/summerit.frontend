import { Component } from '@angular/core';
import { Train } from './train';
import { TrainDetailComponent } from './train-detail.component';
import { TrainsMapComponent } from './trains-map.component';
import { OnInit } from '@angular/core';
import { TrainService } from './train.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Trains</h2>
    <ul class="trains">
      <li *ngFor="let train of trains"
        [class.selected]="train === selectedTrain"
        (click)="onSelect(train)">
        <span class="badge">{{train.id}}</span> {{train.name}}
      </li>
    </ul>
    <my-train-detail [train]="selectedTrain"></my-train-detail>
    <trains-map></trains-map>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .trains {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .trains li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .trains li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .trains li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .trains .text {
      position: relative;
      top: -3px;
    }
    .trains .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [TrainDetailComponent, TrainsMapComponent],
  providers: [TrainService]

})
export class AppComponent  implements OnInit {
  constructor(private trainService: TrainService) { }
    getTrains() {
      this.trainService.getTrains().then(trains => this.trains = trains);
    }

  ngOnInit() {
    this.getTrains();
  }




  title = 'Tour of Trains';
  trains: Train[];
  selectedTrain: Train;
  onSelect(train: Train) { this.selectedTrain = train; }
}

