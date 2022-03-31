import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../ecommerce/ecommerce.module').then((m) => m.EcommerceModule)
  },
];
