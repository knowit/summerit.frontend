import { provideRouter, RouterConfig }  from '@angular/router';
import { TrainsComponent } from './trains.component';
import { DashboardComponent } from './dashboard.component';
import { TrainDetailComponent } from './train-detail.component';

const routes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
  path: 'detail/:id',
  component: TrainDetailComponent
  },
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  {
    path: 'trains',
    component: TrainsComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];