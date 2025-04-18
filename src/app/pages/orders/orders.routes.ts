import { Routes } from '@angular/router';

export const ORDER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageOrdersOverview)
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageOrdersDetails)
  },
  {
    path: ':id/editar',
    loadComponent: () => import('./edit/edit-page.component').then(m => m.PageOrdersEdit)
  }

];


