import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCategoriesForm } from '@components/categories/form/form.component';
import { ComponentCategoriesPreview } from '@components/categories/preview/preview.component';

@Component({
  selector: 'page-categories-add',
  imports: [
    RouterLink,
    ComponentCategoriesForm, ComponentCategoriesPreview
  ],
  templateUrl: './add-page.component.html',
})
export class PageCategoriesAdd { }
