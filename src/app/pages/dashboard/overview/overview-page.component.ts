import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentDashboardCharts } from '@components/dashboard/charts/charts.component';
import { ComponentDashboardStats } from '@components/dashboard/stats/stats.component';
import { ComponentDashboardTable } from '@components/dashboard/table/table.component';

@Component({
  selector: 'page-dashboard-overview',
  imports: [
    RouterModule,
    ComponentDashboardStats,
    ComponentDashboardCharts,
    ComponentDashboardTable
],
  templateUrl: './overview-page.component.html',
})
export class PageDashboardOverview { }
