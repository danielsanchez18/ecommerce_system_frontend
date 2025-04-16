import { Component } from '@angular/core';
import { ComponentSharedSidebarLinks } from '../sidebar-links/sidebar-links.component';
import { LucideAngularModule, PanelLeftClose } from 'lucide-angular';

@Component({
  selector: 'component-shared-sidebar-responsive',
  imports: [
    LucideAngularModule,
    ComponentSharedSidebarLinks
  ],
  templateUrl: './sidebar-responsive.component.html',
})
export class ComponentSharedSidebarResponsive {

  readonly PanelLeftClose = PanelLeftClose;

}
