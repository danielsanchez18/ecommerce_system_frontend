import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageUsersOverview)
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageUsersDetails)
  }
];


