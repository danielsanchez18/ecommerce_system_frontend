import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCategoriesDetails } from '@components/categories/details/details.component';
import { ComponentCategoriesProducts } from '@components/categories/products/products.component';
import { ComponentCategoriesStats } from '@components/categories/stats/stats.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { LucideAngularModule, Pencil, Plus } from 'lucide-angular';

@Component({
  selector: 'page-categories-details',
  imports: [
    RouterLink,
    LucideAngularModule,
    ComponentSharedToast,
    ComponentCategoriesDetails, ComponentCategoriesProducts, ComponentCategoriesStats
  ],
  templateUrl: './details-page.component.html',
})
export class PageCategoriesDetails {

  readonly Plus = Plus;
  readonly Pencil = Pencil;

}
