import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentProductsForm } from '@components/products/form/form.component';
import { ComponentProductsPreview } from '@components/products/preview/preview.component';

@Component({
  selector: 'page-products-add',
  imports: [
    RouterLink,
    ComponentProductsForm, ComponentProductsPreview
  ],
  templateUrl: './add-page.component.html',
})
export class PageProductsAdd { }
