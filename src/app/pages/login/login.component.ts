import { Component } from '@angular/core';
import { AtSign, Lock, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-login',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './login.component.html',
})
export class PageLogin { 

  readonly AtSign = AtSign;
  readonly Lock = Lock;

}
