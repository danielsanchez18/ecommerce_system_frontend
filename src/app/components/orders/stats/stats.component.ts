import { Component } from '@angular/core';
import { LucideAngularModule, ShoppingBag, Store, TriangleAlert, HeartHandshake } from 'lucide-angular';

@Component({
  selector: 'component-orders-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentOrderdsStats {

  readonly Store = Store;
  readonly HeartHandshake = HeartHandshake;
  readonly ShoppingBag = ShoppingBag;
  readonly TriangleAlert = TriangleAlert;

}
