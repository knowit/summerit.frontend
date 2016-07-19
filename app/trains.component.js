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
var router_1 = require('@angular/router');
var train_service_1 = require('./train.service');
var TrainsComponent = (function () {
    function TrainsComponent(router, trainService) {
        this.router = router;
        this.trainService = trainService;
        this.title = 'Togdetaljer';
    }
    TrainsComponent.prototype.getTrains = function () {
        var _this = this;
        this.trainService.getTrains().then(function (trains) { return _this.trains = trains; });
    };
    TrainsComponent.prototype.ngOnInit = function () {
        this.getTrains();
    };
    TrainsComponent.prototype.onSelect = function (train) { this.selectedTrain = train; };
    TrainsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedTrain.id]);
    };
    TrainsComponent = __decorate([
        core_1.Component({
            selector: 'my-trains',
            templateUrl: 'app/trains.component.html',
            styleUrls: ['app/trains.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, train_service_1.TrainService])
    ], TrainsComponent);
    return TrainsComponent;
}());
exports.TrainsComponent = TrainsComponent;
//# sourceMappingURL=trains.component.js.map