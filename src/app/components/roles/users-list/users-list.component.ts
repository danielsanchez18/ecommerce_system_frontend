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
    {
      id: 1,
      name: 'John Doe',
      createdAt: '01 Oct 23',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      createdAt: '15 Sep 23',
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Carlos Pérez',
      createdAt: '20 Jul 23',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Ana Gómez',
      createdAt: '10 Nov 23',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 5,
      name: 'David Martínez',
      createdAt: '12 Oct 23',
      image: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 6,
      name: 'Laura Rodríguez',
      createdAt: '28 Aug 23',
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 7,
      name: 'Pedro López',
      createdAt: '05 Sep 23',
      image: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 8,
      name: 'María Fernández',
      createdAt: '18 Oct 23',
      image: 'https://i.pravatar.cc/150?img=16',
    },
    {
      id: 9,
      name: 'Ricardo Sánchez',
      createdAt: '02 Nov 23',
      image: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 10,
      name: 'Sofia Rodríguez',
      createdAt: '22 Nov 23',
      image: 'https://i.pravatar.cc/150?img=10',
    },
  ];

}
