import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentSharedSidebarResponsive } from '@components/shared/sidebar-responsive/sidebar-responsive.component';
import { ComponentSharedSidebarLinks } from '@components/shared/sidebar-links/sidebar-links.component';
import { Bell, LucideAngularModule, Search, PanelLeftOpen, ChevronRight, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'layout-dashboard',
  imports: [
    RouterModule, CommonModule,
    LucideAngularModule,
    ComponentSharedSidebarLinks, ComponentSharedSidebarResponsive,
    ComponentSharedSidebarLinks
],
  templateUrl: './dashboard-layout.component.html',
})
export class LayoutDashboard {

  readonly Bell = Bell;
  readonly Search = Search;
  readonly PanelLeftOpen = PanelLeftOpen;
  readonly ChevronRight = ChevronRight;
  readonly MessageCircle = MessageCircle;

}
