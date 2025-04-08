import { Component } from '@angular/core';
import { LucideAngularModule, ShoppingBag, Store, TriangleAlert, UsersRound } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-stats-overview',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats-overview.component.html',
})
export class ComponentDashboardStatsOverview {

  readonly Store = Store;
  readonly UsersRound = UsersRound;
  readonly ShoppingBag = ShoppingBag;
  readonly TriangleAlert = TriangleAlert;

}
