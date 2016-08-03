import { Component, OnInit } from '@angular/core';
import { Train } from '../../models/train';
import { TrainService } from '../../services/train.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  styleUrls: ['app/components/dashboard/dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  trains: Train[] = [];
  constructor(private trainService: TrainService, private router: Router) { }
  ngOnInit() {
    this.trainService.getTrains().then(trains => this.trains = trains.slice(0, 3));
  }
  gotoDetail(train: Train) {
  	let link = ['/detail', train.id];
  	this.router.navigate(link);
  }
}