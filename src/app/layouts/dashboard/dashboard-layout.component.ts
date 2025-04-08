import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentSharedSidebard } from '@components/shared/sidebard/sidebard.component';
import { Bell, LucideAngularModule, Search, Menu, ChevronRight, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'layout-dashboard',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentSharedSidebard
  ],
  templateUrl: './dashboard-layout.component.html',
})
export class LayoutDashboard {

  readonly Bell = Bell;
  readonly Search = Search;
  readonly Menu = Menu;
  readonly ChevronRight = ChevronRight;
  readonly MessageCircle = MessageCircle;


}
