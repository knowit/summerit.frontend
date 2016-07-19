import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Train } from './train';
import { TrainDetailComponent } from './train-detail.component';
import { TrainsMapComponent } from './trains-map.component';
import { TrainService } from './train.service';


@Component({
  selector: 'my-trains',
  templateUrl: 'app/trains.component.html',
  styleUrls: ['app/trains.component.css']
})

export class TrainsComponent implements OnInit {

  trains: Train[];
  selectedTrain: Train;
  title = 'Togdetaljer';

  
  constructor(private router: ActivatedRoute, private trainService: TrainService) { }
  
  getTrains() {
    this.trainService.getTrains().then(trains => this.trains = trains);
  }

  ngOnInit() {
    this.getTrains();
  }

  onSelect(train: Train) { this.selectedTrain = train; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedTrain.id]);
  }

}