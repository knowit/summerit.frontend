import { provideRouter, RouterConfig }  from '@angular/router';
import { TrainsComponent } from './components/trains/trains.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';

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