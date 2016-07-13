import { Injectable } from '@angular/core';
import { TRAINS } from './mock-trains';

@Injectable()
export class TrainService {
  getTrains() {
    return Promise.resolve(TRAINS);
  }
}