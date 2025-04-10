import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentOrdersTable } from '@components/orders/table/table.component';
import { LucideAngularModule, ShoppingBag, Search, ArrowUpDown, ChevronDown, SlidersHorizontal, Pencil, Download, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'component-users-orders',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentOrdersTable
  ],
  templateUrl: './orders.component.html',
})
export class ComponentUsersOrders {

  readonly ShoppingBag = ShoppingBag;
  readonly Search = Search;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly Pencil = Pencil;
  readonly Download = Download;
  readonly ChevronRight = ChevronRight;

  orders = [
    { id: 1, status: 'Pendiente', date: 'Hace 20 min', address: 'Urb. Patazca - Los Rosales 134 Piso 2', items: 2, price: 100, paymentMethod: 'Efectivo', paymentStatus: 'Pendiente' },
    { id: 2, status: 'Relizado', date: '2025-03-25 10:30', address: 'Local Av. Balta 189', items: 2, price: 100, paymentMethod: 'Efectivo', paymentStatus: 'Realizado' },
    { id: 3, status: 'Relizado', date: '2025-03-25 10:30', address: 'Local Av. Balta 189', items: 2, price: 100, paymentMethod: 'Tarjeta', paymentStatus: 'Realizado' },
    { id: 4, status: 'Relizado', date: '2025-03-25 10:30', address: 'Local Av. Balta 189', items: 2, price: 100, paymentMethod: 'Yape', paymentStatus: 'Realizado' },
    { id: 5, status: 'Relizado', date: '2025-03-25 10:30', address: 'Local Av. Balta 189', items: 2, price: 100, paymentMethod: 'Efectivo', paymentStatus: 'Realizado' },
  ]
}
