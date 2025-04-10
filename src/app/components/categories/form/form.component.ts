import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-categories-form',
  imports: [
    LucideAngularModule,
    CommonModule, RouterModule
  ],
  templateUrl: './form.component.html',
})
export class ComponentCategoriesForm {

  @Input()
  formCreate: boolean = false;

  @Input()
  formEdit: boolean = false;

}
