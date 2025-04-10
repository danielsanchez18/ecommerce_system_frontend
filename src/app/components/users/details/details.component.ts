import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentAddressesCard } from '@components/addresses/card/card.component';
import { ComponentPayMethodsCard } from '@components/pay_methods/card/card.component';
import { LucideAngularModule, Mail, Phone, MapPin, CircleCheck, Info, CalendarDays, CalendarClock, UserRoundCog, CreditCard } from 'lucide-angular';

@Component({
  selector: 'component-users-details',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentAddressesCard, ComponentPayMethodsCard
  ],
  templateUrl: './details.component.html',
})
export class ComponentUsersDetails {

  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly CircleCheck = CircleCheck;
  readonly Info = Info;
  readonly CalendarDays = CalendarDays;
  readonly CalendarClock = CalendarClock;

  readonly UserRoundCog = UserRoundCog;
  readonly CreditCard = CreditCard;

  addresses = [
    {
      id: '1',
      street: '123 Main St, Apartment 4B, San Francisco, CA 94102',
      isPrincipal: true
    },
    {
      id: '2',
      street: '123 Main St, Apartment 4B, San Francisco, CA 94102',
      isPrincipal: false
    }
  ]

  creditCards = [
    {
      id: '1',
      entity: 'Visa',
      lastDigits: '9644',
      isPrincipal: true
    },
    {
      id: '2',
      entity: 'Interbank',
      lastDigits: '1758',
      isPrincipal: false
    }
  ]

}
