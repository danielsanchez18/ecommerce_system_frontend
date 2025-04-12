import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Search, UserRoundCog, ChevronDown } from 'lucide-angular';

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
  readonly UserRoundCog = UserRoundCog;
  readonly ChevronDown = ChevronDown;

  users = [
    {
      id: 1,
      name: 'John Doe',
      roles: ['Administrador'],
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      roles: ['Cajero'],
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Carlos Pérez',
      roles: ['Cocinero'],
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Ana Gómez',
      roles: ['Mesera'],
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 5,
      name: 'David Martínez',
      roles: ['Administrador'],
      image: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 6,
      name: 'Laura Rodríguez',
      roles: ['Cajero'],
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 7,
      name: 'Pedro López',
      roles: ['Cocinero'],
      image: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 8,
      name: 'María Fernández',
      roles: ['Mesera'],
      image: 'https://i.pravatar.cc/150?img=16',
    },
    {
      id: 9,
      name: 'Ricardo Sánchez',
      roles: ['Administrador'],
      image: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 10,
      name: 'Sofia Rodríguez',
      roles: ['Cajero'],
      image: 'https://i.pravatar.cc/150?img=10',
    },
  ];

}
