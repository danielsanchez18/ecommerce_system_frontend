import { Component } from '@angular/core';
import { LucideAngularModule, ShoppingBag, Store, TriangleAlert, UsersRound } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentDashboardStats {

  readonly Store = Store;
  readonly UsersRound = UsersRound;
  readonly ShoppingBag = ShoppingBag;
  readonly TriangleAlert = TriangleAlert;

}
