import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageProductsOverview)
  },
  {
    path: 'agregar',
    loadComponent: () => import('./add/add-page.component').then(m => m.PageProductsAdd)
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageProductsDetails)
  },
  {
    path: ':id/editar',
    loadComponent: () => import('./edit/edit-page.component').then(m => m.PageProductsEdit)
  }

];


