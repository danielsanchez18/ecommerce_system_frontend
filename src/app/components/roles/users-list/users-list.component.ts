import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Search, ChevronDown, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'component-roles-users-list',
  imports: [
    LucideAngularModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './users-list.component.html',
})
export class ComponentRolesUsersList {

  readonly Search = Search;
  readonly ChevronDown = ChevronDown;
  readonly ChevronRight = ChevronRight;

  users = [
    { name: 'Daniel Sanchez Pisfil', created_at: '25 Mar 2025 | 10:30 PM'},
    { name: 'Luisa Lopez', created_at: '25 Mar 2025 | 10:30 PM' },
    { name: 'Mark Durán', created_at: '25 Mar 2025 | 10:30 PM' },
  ]

}
