import { Component } from '@angular/core';
import { LucideAngularModule, ShoppingBag, Store, TriangleAlert, UsersRound } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-stats-general',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats-general.component.html',
})
export class ComponentDashboardStatsGeneral {

  readonly Store = Store;
  readonly UsersRound = UsersRound;
  readonly ShoppingBag = ShoppingBag;
  readonly TriangleAlert = TriangleAlert;

}
