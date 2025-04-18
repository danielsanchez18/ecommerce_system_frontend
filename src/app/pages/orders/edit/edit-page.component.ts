import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentOrdersEditInfo } from '@components/orders/edit-info/edit-info.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { ComponentOrdersEditProductsList } from '../../../components/orders/edit-products-list/edit-products-list.component';
import { ComponentOrdersComments } from '@components/orders/comments/comments.component';

@Component({
  selector: 'page-orders-edit',
  imports: [
    RouterLink,
    ComponentSharedToast,
    ComponentOrdersEditInfo, ComponentOrdersComments, ComponentOrdersEditProductsList
  ],
  templateUrl: './edit-page.component.html',
})
export class PageOrdersEdit { }
