import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../../models/train';
import { TrainDetailComponent } from '../../components/train-detail/train-detail.component';
import { TrainService } from '../../services/train.service';


@Component({
  selector: 'my-trains',
  templateUrl: 'app/components/trains/trains.component.html',
  styleUrls: ['app/components/trains/trains.component.css']
})

export class TrainsComponent implements OnInit {

  trains: Train[];
  selectedTrain: Train;
  title = 'Togdetaljer';

  
  constructor(private router: Router, private trainService: TrainService) { }
  
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