import { Component } from '@angular/core';
import { ComponentSharedStates } from '../../shared/states/states.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Map, ShoppingBag, Store, UserRound } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-orders-table',
  imports: [
    LucideAngularModule,
    ComponentSharedStates,
    CommonModule, RouterLink
  ],
  templateUrl: './table.component.html',
})
export class ComponentOrdersTable {

  readonly UserRound = UserRound;
  readonly Map = Map;
  readonly ShoppingBag = ShoppingBag;
  readonly Store = Store;

  orders = [
    {
      id: 'ORD-073722080425',
      date: 'Ago 25, 2025 | 07:39',
      state: 'Pendiente',
      customer: 'Daniel Sanchez',
      type: 'Delivery',
      address: 'Av. London Park 351 - Piso 2',
      total: 37.60
    },
    {
      id: 'ORD-054522080425',
      date: 'Jul 08, 2025 | 08:05',
      state: 'Cancelado',
      customer: 'Luisa Mendoza',
      type: 'En Tienda',
      address: 'Av. Los Rosales 351',
      total: 15.42
    },
    {
      id: 'ORD-083522080425',
      date: 'Mar 12, 2025 | 09:10',
      state: 'Pendiente',
      customer: 'Carlos Pérez',
      type: 'Delivery',
      address: 'Calle 45, Zona 3, Edificio A',
      total: 45.50
    },
    {
      id: 'ORD-034222080425',
      date: 'Feb 18, 2025 | 15:30',
      state: 'Entregado',
      customer: 'María López',
      type: 'En Tienda',
      address: 'Calle de la Paz 789',
      total: 25.80
    },
    {
      id: 'ORD-056622080425',
      date: 'Ene 25, 2025 | 11:45',
      state: 'Pendiente',
      customer: 'Ricardo Fernández',
      type: 'Delivery',
      address: 'Calle Magnolia 123 - Piso 5',
      total: 19.90
    },
    {
      id: 'ORD-097722080425',
      date: 'Abr 10, 2025 | 10:00',
      state: 'Entregado',
      customer: 'Patricia García',
      type: 'En Tienda',
      address: 'Calle Gran Vía 465',
      total: 32.10
    },
    {
      id: 'ORD-073122080425',
      date: 'Mar 02, 2025 | 14:15',
      state: 'Cancelado',
      customer: 'Javier Morales',
      type: 'Delivery',
      address: 'Calle Nueva 203',
      total: 22.75
    },
    {
      id: 'ORD-062522080425',
      date: 'Mar 28, 2025 | 18:20',
      state: 'Pendiente',
      customer: 'Sofía Martínez',
      type: 'En Tienda',
      address: 'Calle San Juan 512',
      total: 30.00
    },
    {
      id: 'ORD-091922080425',
      date: 'Abr 03, 2025 | 12:05',
      state: 'Entregado',
      customer: 'Antonio Díaz',
      type: 'Delivery',
      address: 'Avenida del Sol 103',
      total: 50.00
    },
    {
      id: 'ORD-077322080425',
      date: 'Ene 20, 2025 | 16:30',
      state: 'Pendiente',
      customer: 'Lucía Rodríguez',
      type: 'En Tienda',
      address: 'Plaza Mayor 215',
      total: 28.60
    }
  ]


}
