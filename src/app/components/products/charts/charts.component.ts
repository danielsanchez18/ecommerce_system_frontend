import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-products-charts',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './charts.component.html',
})
export class ComponentProductsCharts {

  readonly ChevronDown = ChevronDown;

}
