import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingBag, CalendarClock, UserRound, UserRoundCog, Truck, Clock, Wallet, Phone, TicketPercent, Loader, ChevronRight, Map, ChevronDown, Store } from 'lucide-angular';


@Component({
  selector: 'component-orders-edit-info',
  imports: [
    CommonModule, RouterLink, FormsModule,
    LucideAngularModule,
  ],
  templateUrl: './edit-info.component.html',
})
export class ComponentOrdersEditInfo {

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
  readonly ChevronDown = ChevronDown;
  readonly Store = Store;

  tipoPedido: string = 'delivery';



}
