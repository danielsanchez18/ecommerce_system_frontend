import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-shared-states',
  imports: [CommonModule],
  templateUrl: './states.component.html',
})
export class ComponentSharedStates {

  @Input()
  state: string = '';

}
