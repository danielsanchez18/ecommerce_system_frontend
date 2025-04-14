import { Routes } from '@angular/router';
import { LayoutDashboard } from '@layouts/dashboard/dashboard-layout.component';


export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: LayoutDashboard,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'categorias',
        loadChildren: () => import('@pages/categories/categories.routes').then(m => m.CATEGORY_ROUTES)
      },
      {
        path: 'productos',
        loadChildren: () => import('@pages/products/products.routes').then(m => m.PRODUCT_ROUTES)
      },
      {
        path: 'roles',
        loadChildren: () => import('@pages/roles/roles.routes').then(m => m.ROLE_ROUTES)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('@pages/users/users.routes').then(m => m.USER_ROUTES)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('@pages/orders/orders.routes').then(m => m.ORDER_ROUTES)
      }
    ]
  }
];
