import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentDashboardStatsGeneral } from '@components/dashboard/stats-general/stats-general.component';

@Component({
  selector: 'page-dashboard-overview',
  imports: [
    RouterModule,
    ComponentDashboardStatsGeneral
  ],
  templateUrl: './overview-page.component.html',
})
export class PageDashboardOverview { }
