import { Component } from '@angular/core';
import { CalendarClock, CalendarDays, Info, LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'component-categories-details',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './details.component.html',
})
export class ComponentCategoriesDetails {

  readonly CalendarDays = CalendarDays;
  readonly CalendarClock = CalendarClock;
  readonly Info = Info;

}
