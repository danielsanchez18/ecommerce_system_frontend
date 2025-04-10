import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'component-products-form',
  imports: [
    LucideAngularModule,
    CommonModule, RouterModule
  ],
  templateUrl: './form.component.html',
})
export class ComponentProductsForm {

  @Input()
  formCreate: boolean = false;

  @Input()
  formEdit: boolean = false;

  readonly ChevronDown = ChevronDown;

  categories = [
    {id: 1, name: 'Café'},
    {id: 2, name: 'Té'},
    {id: 3, name: 'Galletas'},
    {id: 4, name: 'Pastel'},
    {id: 5, name: 'Galletas'},
    {id: 6, name: 'Pastel'},
    {id: 7, name: 'Galletas'},
    {id: 8, name: 'Pastel'},
    {id: 9, name: 'Galletas'},
    {id: 10, name: 'Pastel'},
    {id: 11, name: 'Galletas'}
  ]

}

