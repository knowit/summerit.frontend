import { Component } from '@angular/core';
import { Train } from '../../models/train';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list/grid-list';


@Component({
	selector: 'trains-map',
	templateUrl:'app/components/trains-map/trains-map.component.html',
	styleUrls: ['app/components/trains-map/trains-map.component.css'],
	directives: [MD_GRID_LIST_DIRECTIVES]

})


export class TrainsMapComponent {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}