import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentProductsTable } from '@components/products/table/table.component';
import { ArrowUpDown, ChevronDown, ChevronRight, LucideAngularModule, Plus, Search, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'page-product-overview',
  imports: [
    RouterLink,
    LucideAngularModule,
    ComponentProductsTable
  ],
  templateUrl: './overview-page.component.html',
})
export class PageProductsOverview {

  readonly Plus = Plus;
  readonly Search = Search;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly ChevronRight = ChevronRight;

}
