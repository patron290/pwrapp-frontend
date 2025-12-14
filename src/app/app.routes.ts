import { Routes } from '@angular/router';
import { CompetitorList } from './competitor-list/competitor-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'competitors',
    component: CompetitorList,
  },
];
