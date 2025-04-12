import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, UsersRound } from 'lucide-angular';

@Component({
  selector: 'component-roles-table',
  imports: [
    RouterLink,
    LucideAngularModule,
  ],
  templateUrl: './table.component.html',
})
export class ComponentRolesTable {

  readonly UsersRound = UsersRound;

  roles = [
    {
      id: '1',
      name: 'Administrador',
      description: 'Tiene acceso total a todo el sistema',
      users: 6
    },
    {
      id: '2',
      name: 'Vendedor',
      description: 'Tiene acceso a las funcionalidades de ventas',
      users: 17
    },
    {
      id: '3',
      name: 'Cliente',
      description: 'Tiene acceso a las funcionalidades de clientes',
      users: 2463
    },
    {
      id: '4',
      name: 'Mesero',
      description: 'Tiene acceso a las funcionalidades de meseros',
      users: 16
    },
    {
      id: '5',
      name: 'Cajero',
      description: 'Tiene acceso a las funcionalidades de cajeros',
      users: 7
    }
  ]

}
