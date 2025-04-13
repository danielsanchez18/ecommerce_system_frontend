import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentOrderdsStats } from '@components/orders/stats/stats.component';
import { ComponentOrdersTable } from '@components/orders/table/table.component';
import { ArrowUpDown, ChevronDown, ChevronRight, LucideAngularModule, Search, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'page-orders-overview',
  imports: [
    LucideAngularModule,
    RouterLink,
    ComponentOrdersTable, ComponentOrderdsStats
  ],
  templateUrl: './overview-page.component.html',
})
export class PageOrdersOverview {

  readonly ChevronRight = ChevronRight;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly Search = Search;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;

}
