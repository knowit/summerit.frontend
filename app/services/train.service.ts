import { Injectable } from '@angular/core';
import { TRAINS } from '../mock-trains';

@Injectable()
export class TrainService {
  getTrains() {
    return Promise.resolve(TRAINS);
  }

  getTrain(id:number) {
  	return this.getTrains().then(trains => trains.find(train => train.id === id));
  }
}