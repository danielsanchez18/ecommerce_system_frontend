import { Routes } from '@angular/router';

export const ROLE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageRolesOverview)
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageRolesDetails)
  }
];


