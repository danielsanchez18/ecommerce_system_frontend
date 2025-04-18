import { Component } from '@angular/core';
import { ComponentOrderdsStats } from '@components/orders/stats/stats.component';
import { ComponentOrdersTable } from '@components/orders/table/table.component';
import { ArrowUpDown, ChevronDown, ChevronRight, LucideAngularModule, Search, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'page-orders-overview',
  imports: [
    LucideAngularModule,
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
