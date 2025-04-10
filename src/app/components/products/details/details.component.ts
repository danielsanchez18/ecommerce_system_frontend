import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { BadgePercent, CalendarClock, CalendarDays, CircleDollarSign, Info, LucideAngularModule, Tag } from 'lucide-angular';

@Component({
  selector: 'component-products-details',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentSharedStates
  ],
  templateUrl: './details.component.html',
})
export class ComponentProductsDetails {

  readonly Info = Info;
  readonly CalendarClock = CalendarClock;
  readonly CalendarDays = CalendarDays;
  readonly Tag = Tag;
  readonly CircleDollarSign = CircleDollarSign;
  readonly BadgePercent = BadgePercent;

}
