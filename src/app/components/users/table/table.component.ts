import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CircleCheck, UserRoundCog, CircleMinus, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-users-table',
  imports: [
    RouterLink,
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './table.component.html',
})
export class ComponentUsersTable {

  readonly UserRoundCog = UserRoundCog;
  readonly CircleCheck = CircleCheck;
  readonly CircleMinus = CircleMinus;

  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: ['Administrador'],
      enabled: true,
      createdAt: '01 Oct 23',
      lastLogin: 'Hace 2d',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@gmail.com',
      role: ['Cajero'],
      enabled: true,
      createdAt: '15 Sep 23',
      lastLogin: 'Hace 5h',
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Carlos Pérez',
      email: 'carlosperez@gmail.com',
      role: ['Cocinero'],
      enabled: true,
      createdAt: '20 Jul 23',
      lastLogin: 'Hace 1d',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Ana Gómez',
      email: 'anagomez@gmail.com',
      role: ['Mesera'],
      enabled: false,
      createdAt: '10 Nov 23',
      lastLogin: 'Hace 1 sem',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 5,
      name: 'David Martínez',
      email: 'davidmartinez@gmail.com',
      role: ['Administrador'],
      enabled: true,
      createdAt: '12 Oct 23',
      lastLogin: 'Hace 10h',
      image: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 6,
      name: 'Laura Rodríguez',
      email: 'laurarodriguez@gmail.com',
      role: ['Cajero'],
      enabled: true,
      createdAt: '28 Aug 23',
      lastLogin: 'Hace 3d',
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 7,
      name: 'Pedro López',
      email: 'pedrolopez@gmail.com',
      role: ['Cocinero'],
      enabled: false,
      createdAt: '05 Sep 23',
      lastLogin: 'Hace 2 sem',
      image: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 8,
      name: 'María Fernández',
      email: 'mariafernandez@gmail.com',
      role: ['Mesera'],
      enabled: true,
      createdAt: '18 Oct 23',
      lastLogin: 'Hace 4h',
      image: 'https://i.pravatar.cc/150?img=16',
    },
    {
      id: 9,
      name: 'Ricardo Sánchez',
      email: 'ricardosanchez@gmail.com',
      role: ['Administrador'],
      enabled: true,
      createdAt: '02 Nov 23',
      lastLogin: 'Hace 1d',
      image: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 10,
      name: 'Sofia Rodríguez',
      email: 'sofiarodriguez@gmail.com',
      role: ['Cajero'],
      enabled: true,
      createdAt: '22 Nov 23',
      lastLogin: 'Hace 6h',
      image: 'https://i.pravatar.cc/150?img=10',
    },
  ];


}
