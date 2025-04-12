import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentRolesUsersList } from '@components/roles/users-list/users-list.component';
import { ComponentRolesUsersSearch } from '@components/roles/users-search/users-search.component';

@Component({
  selector: 'page-roles-details',
  imports: [
    RouterModule,
    ComponentRolesUsersList, ComponentRolesUsersSearch
  ],
  templateUrl: './details-page.component.html',
})
export class PageRolesDetails { }
