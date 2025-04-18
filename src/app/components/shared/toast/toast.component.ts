import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Info, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-shared-toast',
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './toast.component.html',
})
export class ComponentSharedToast {

  @Input()
  details: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  orders: boolean = false;

  @Input()
  edit: boolean = false;

  readonly Info = Info;

}
