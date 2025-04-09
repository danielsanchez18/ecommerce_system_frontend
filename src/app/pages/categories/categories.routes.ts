import { Routes } from '@angular/router';

export const CATEGORY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview-page.component').then(m => m.PageCategoriesOverview)
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageCategoriesDetails)
  }

];


