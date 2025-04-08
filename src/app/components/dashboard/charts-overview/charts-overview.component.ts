import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronDown, Plus, ChartColumn, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-charts-overview',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './charts-overview.component.html',
})
export class ComponentDashboardChartsOverview {

  ChevronDown = ChevronDown;
  Plus = Plus;
  ChartColumn = ChartColumn;
  ChevronRight = ChevronRight;

}
