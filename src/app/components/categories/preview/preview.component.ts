import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Info, LucideAngularModule, CalendarDays, CalendarClock } from 'lucide-angular';

@Component({
  selector: 'component-categories-preview',
  imports: [
    CommonModule, LucideAngularModule
  ],
  templateUrl: './preview.component.html',
})
export class ComponentCategoriesPreview {

  readonly Info = Info;
  readonly CalendarDays = CalendarDays;
  readonly CalendarClock = CalendarClock;
}
