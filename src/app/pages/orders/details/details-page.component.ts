import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentOrdersInfo } from '@components/orders/info/info.component';
import { ComponentOrdersProductsList } from '@components/orders/products-list/products-list.component';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';

@Component({
  selector: 'page-orders-details',
  imports: [
    RouterLink,
    ComponentSharedStates, ComponentSharedToast,
    ComponentOrdersProductsList, ComponentOrdersInfo
  ],
  templateUrl: './details-page.component.html',
})
export class PageOrdersDetails { }
