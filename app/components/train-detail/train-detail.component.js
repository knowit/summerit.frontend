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
var train_service_1 = require('../../services/train.service');
var TrainDetailComponent = (function () {
    function TrainDetailComponent(trainService, route) {
        this.trainService = trainService;
        this.route = route;
    }
    TrainDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.trainService.getTrain(id).then(function (train) { return _this.train = train; });
        });
    };
    TrainDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TrainDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    TrainDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-train-detail',
            templateUrl: 'app/components/train-detail/train-detail.component.html'
        }), 
        __metadata('design:paramtypes', [train_service_1.TrainService, router_1.ActivatedRoute])
    ], TrainDetailComponent);
    return TrainDetailComponent;
}());
exports.TrainDetailComponent = TrainDetailComponent;
//# sourceMappingURL=train-detail.component.js.map