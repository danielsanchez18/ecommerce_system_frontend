import { Component } from '@angular/core';
import { ComponentUsersDetails } from '@components/users/details/details.component';
import { RouterModule } from '@angular/router';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { ComponentUsersStats } from '@components/users/stats/stats.component';
import { ComponentUsersOrders } from "../../../components/users/orders/orders.component";

@Component({
  selector: 'page-users-details',
  imports: [
    RouterModule,
    ComponentSharedToast,
    ComponentUsersDetails, ComponentUsersStats, ComponentUsersOrders
],
  templateUrl: './details-page.component.html',
})
export class PageUsersDetails {


}
