import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Info, LucideAngularModule, CalendarDays, CalendarClock, Tag } from 'lucide-angular';

@Component({
  selector: 'component-products-preview',
  imports: [
    CommonModule, LucideAngularModule
  ],
  templateUrl: './preview.component.html',
})
export class ComponentProductsPreview {

  readonly Info = Info;
  readonly CalendarDays = CalendarDays;
  readonly CalendarClock = CalendarClock;
  readonly Tag = Tag;
}
