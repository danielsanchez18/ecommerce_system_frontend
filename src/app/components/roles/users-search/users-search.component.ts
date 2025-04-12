import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Search, UsersRound, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'component-roles-users-search',
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './users-search.component.html',
})
export class ComponentRolesUsersSearch {

  readonly Search = Search;
  readonly UsersRound = UsersRound;
  readonly ChevronDown = ChevronDown;

  users = [
    { name: 'Jose Luis Mendoza', roles: 'Cliente' },
    { name: 'Paolo García', roles: 'Repartidor, Cliente' },
    { name: 'María Lopez García', roles: 'Cliente' },
    { name: 'Mark Durán', roles: 'Cliente' },
    { name: 'Luisa Mendoza', roles: 'Camarero Básico, Camarero Avanzado, Cliente' }
  ]

}
