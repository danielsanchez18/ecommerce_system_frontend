import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardDrive, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-orders-comments',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './comments.component.html',
})
export class ComponentOrdersComments {

  readonly HardDrive = HardDrive;

}
