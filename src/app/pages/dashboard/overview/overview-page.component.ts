import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentDashboardChartsOverview } from '@components/dashboard/charts-overview/charts-overview.component';
import { ComponentDashboardStatsOverview } from '@components/dashboard/stats-overview/stats-overview.component';

@Component({
  selector: 'page-dashboard-overview',
  imports: [
    RouterModule,
    ComponentDashboardStatsOverview,
    ComponentDashboardChartsOverview
  ],
  templateUrl: './overview-page.component.html',
})
export class PageDashboardOverview { }
