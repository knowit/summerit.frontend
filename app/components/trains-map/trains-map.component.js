"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var TrainsMapComponent = (function () {
    function TrainsMapComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    TrainsMapComponent = __decorate([
        core_1.Component({
            selector: 'trains-map',
            templateUrl: 'app/components/trains-map/trains-map.component.html',
            styleUrls: ['app/components/trains-map/trains-map.component.css'],
            directives: [grid_list_1.MD_GRID_LIST_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TrainsMapComponent);
    return TrainsMapComponent;
}());
exports.TrainsMapComponent = TrainsMapComponent;
//# sourceMappingURL=trains-map.component.js.map