import { Component } from '@angular/core';
import { ComponentRolesTable } from '@components/roles/table/table.component';

@Component({
  selector: 'page-roles-overview',
  imports: [
    ComponentRolesTable
  ],
  templateUrl: './overview-page.component.html',
})
export class PageRolesOverview { }
