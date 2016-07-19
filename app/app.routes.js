"use strict";
var router_1 = require('@angular/router');
var trains_component_1 = require('./trains.component');
var dashboard_component_1 = require('./dashboard.component');
var train_detail_component_1 = require('./train-detail.component');
var routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: train_detail_component_1.TrainDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'trains',
        component: trains_component_1.TrainsComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map