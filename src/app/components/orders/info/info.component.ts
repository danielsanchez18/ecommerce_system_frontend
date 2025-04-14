import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { LucideAngularModule, ShoppingBag, CalendarClock, UserRound, UserRoundCog, Truck, Clock, CreditCard, Phone, TicketPercent, Loader } from 'lucide-angular';

@Component({
  selector: 'component-orders-info',
  imports: [
    LucideAngularModule,
    RouterLink,
    ComponentSharedStates
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
  readonly TicketPercent = TicketPercent;
  readonly Loader = Loader;

}
