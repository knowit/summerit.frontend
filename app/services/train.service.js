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
var http_1 = require('@angular/http');
var TrainService = (function () {
    function TrainService(http) {
        this.http = http;
        this.trainsUrl = 'http://knowit.filip0.com/trains';
    }
    TrainService.prototype.getTrains = function () {
        return this.http.get(this.trainsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TrainService.prototype.getTrain = function (id) {
        return this.getTrains()
            .then(function (trains) { return trains.find(function (train) { return train.id === id; }); });
    };
    TrainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TrainService);
    return TrainService;
}());
exports.TrainService = TrainService;
//# sourceMappingURL=train.service.js.map