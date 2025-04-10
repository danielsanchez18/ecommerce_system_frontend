import { Routes } from '@angular/router';
import { PageUsersOverview } from '@pages/users/overview/overview-page.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: PageUsersOverview
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details-page.component').then(m => m.PageUsersDetails)
  }
];


