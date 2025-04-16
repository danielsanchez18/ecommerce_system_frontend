import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { LucideAngularModule, ShoppingBag, CalendarClock, UserRound, UserRoundCog, Truck, Clock, Wallet, Phone, TicketPercent, Loader, ChevronRight, Map } from 'lucide-angular';

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
  readonly Wallet = Wallet;
  readonly UserRound = UserRound;
  readonly Phone = Phone;
  readonly TicketPercent = TicketPercent;
  readonly Loader = Loader;
  readonly ChevronRight = ChevronRight;
  readonly Map = Map;

}
