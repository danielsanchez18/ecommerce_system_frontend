import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingBag, CalendarClock, UserRound, UserRoundCog, Truck, Clock, CreditCard, Phone } from 'lucide-angular';

@Component({
  selector: 'component-orders-info',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './info.component.html',
})
export class ComponentOrdersInfo {

  readonly ShoppingBag = ShoppingBag;
  readonly CalendarClock = CalendarClock;
  readonly UserRoundCog = UserRoundCog;
  readonly Truck = Truck;
  readonly Clock = Clock;
  readonly CreditCard = CreditCard;
  readonly UserRound = UserRound;
  readonly Phone = Phone;

}
