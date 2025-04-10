import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCategoriesForm } from '@components/categories/form/form.component';
import { ComponentCategoriesPreview } from '@components/categories/preview/preview.component';

@Component({
  selector: 'page-categories-edit',
  imports: [
    RouterLink,
    ComponentCategoriesForm, ComponentCategoriesPreview

  ],
  templateUrl: './edit-page.component.html',
})
export class PageCategoriesEdit { }
