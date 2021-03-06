import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrainService } from '../../services/train.service';
import { Train } from '../../models/train';

@Component({
  selector: 'my-train-detail',
  templateUrl: 'app/components/train-detail/train-detail.component.html'
})
export class TrainDetailComponent implements OnInit, OnDestroy {

  train: Train;
  sub: any;

  constructor(
    private trainService: TrainService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.trainService.getTrain(id).then(train => this.train = train);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }


}