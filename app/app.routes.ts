import { provideRouter, RouterConfig }  from '@angular/router';
import { TrainsComponent } from './components/trains/trains.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';
import { TrainsMapComponent } from './components/trains-map/trains-map.component';


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
  },
  {
    path: 'trains-map',
    component: TrainsMapComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];