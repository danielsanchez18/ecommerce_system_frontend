import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentProductsCharts } from '@components/products/charts/charts.component';
import { ComponentProductsDetails } from '@components/products/details/details.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';

@Component({
  selector: 'page-products-details',
  imports: [
    RouterLink,
    ComponentSharedToast,
    ComponentProductsDetails, ComponentProductsCharts
  ],
  templateUrl: './details-page.component.html',
})
export class PageProductsDetails { }
