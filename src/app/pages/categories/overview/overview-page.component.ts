import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCategoriesTable } from '@components/categories/table/table.component';
import { ArrowUpDown, ChevronDown, ChevronRight, LucideAngularModule, Plus, Search, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'page-categories-overview',
  imports: [
    RouterLink,
    LucideAngularModule,
    ComponentCategoriesTable
  ],
  templateUrl: './overview-page.component.html',
})
export class PageCategoriesOverview {

  readonly Plus = Plus;
  readonly Search = Search;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly ChevronRight = ChevronRight;

}
