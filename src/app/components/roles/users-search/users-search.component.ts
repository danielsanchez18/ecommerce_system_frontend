import { Component } from '@angular/core';
import { LucideAngularModule, Search, UserRoundCog, ChevronDown, UserRoundSearch } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-roles-users-search',
  imports: [
    LucideAngularModule,
    FormsModule, CommonModule
  ],
  templateUrl: './users-search.component.html',
})
export class ComponentRolesUsersSearch {

  searchTerm: string = '';
  filteredUsers: any[] = [];
  selectedUsers: any[] = [];
  removingUserIds: number[] = [];

  readonly Search = Search;
  readonly UserRoundCog = UserRoundCog;
  readonly UserRoundSearch = UserRoundSearch;
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


  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) &&
      !this.selectedUsers.some(selected => selected.id === user.id)
    );
  }

  selectUser(user: any) {
    this.selectedUsers.push(user);
    this.searchTerm = '';
    this.filteredUsers = [];
  }

  // removeUser(userId: number) {
  //   this.selectedUsers = this.selectedUsers.filter(user => user.id !== userId);
  // }

  removeUser(userId: number) {
    this.removingUserIds.push(userId);

    setTimeout(() => {
      this.selectedUsers = this.selectedUsers.filter(user => user.id !== userId);
      this.removingUserIds = this.removingUserIds.filter(id => id !== userId);
    }, 200); // tiempo igual a la duración de tu animación
  }


  assignUsers() {
    if (this.selectedUsers.length === 0) return;

    // Podés agregar lógica de envío real si querés luego
    console.log('Usuarios asignados:', this.selectedUsers);

    // Simular asignación: limpiar lista
    this.selectedUsers = [];
    this.searchTerm = '';
    this.filteredUsers = [];
  }


}
