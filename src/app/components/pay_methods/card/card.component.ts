import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreditCard, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-pay-methods-card',
  imports: [
    CommonModule,
    LucideAngularModule
    //RouterLink
  ],
  templateUrl: './card.component.html',
})

export class ComponentPayMethodsCard {

  @Input() creditCard!: any;

  readonly CreditCard = CreditCard;

}
