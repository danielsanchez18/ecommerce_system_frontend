import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-addresses-card',
  imports: [
    CommonModule,
    //RouterLink
  ],
  templateUrl: './card.component.html',
})

export class ComponentAddressesCard {

  @Input() address!: any;

}
