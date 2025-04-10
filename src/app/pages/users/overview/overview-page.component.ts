import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentUsersTable } from '@components/users/table/table.component';
import { ArrowUpDown, ChevronDown, ChevronRight, LucideAngularModule, Plus, Search, SlidersHorizontal } from 'lucide-angular';

@Component({
  selector: 'page-users-overview',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentUsersTable
  ],
  templateUrl: './overview-page.component.html',
})
export class PageUsersOverview {

  readonly Plus = Plus;
  readonly Search = Search;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly ChevronRight = ChevronRight;

}
