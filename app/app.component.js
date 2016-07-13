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
var train_detail_component_1 = require('./train-detail.component');
var trains_map_component_1 = require('./trains-map.component');
var train_service_1 = require('./train.service');
var AppComponent = (function () {
    function AppComponent(trainService) {
        this.trainService = trainService;
        this.title = 'Tour of Trains';
    }
    AppComponent.prototype.getTrains = function () {
        var _this = this;
        this.trainService.getTrains().then(function (trains) { return _this.trains = trains; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTrains();
    };
    AppComponent.prototype.onSelect = function (train) { this.selectedTrain = train; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Trains</h2>\n    <ul class=\"trains\">\n      <li *ngFor=\"let train of trains\"\n        [class.selected]=\"train === selectedTrain\"\n        (click)=\"onSelect(train)\">\n        <span class=\"badge\">{{train.id}}</span> {{train.name}}\n      </li>\n    </ul>\n    <my-train-detail [train]=\"selectedTrain\"></my-train-detail>\n    <trains-map></trains-map>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .trains {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .trains li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .trains li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .trains li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .trains .text {\n      position: relative;\n      top: -3px;\n    }\n    .trains .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
            directives: [train_detail_component_1.TrainDetailComponent, trains_map_component_1.TrainsMapComponent],
            providers: [train_service_1.TrainService]
        }), 
        __metadata('design:paramtypes', [train_service_1.TrainService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map