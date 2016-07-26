import { Injectable } from '@angular/core';
import { TRAINS } from '../mock-trains';
import { Headers, Http } from '@angular/http';


@Injectable()
export class TrainService {
  private trainsUrl = 'http://knowit.filip0.com/trains'; 
  constructor(private http: Http) { }


  getTrains() {
    return this.http.get(this.trainsUrl)
               .toPromise()
               .then(response => response.json().data as Train[])
               .catch(this.handleError);
  }
  getTrain(id: number) {
    return this.getTrains()
               .then(trains => trains.find(train => train.id === id));
  }

}