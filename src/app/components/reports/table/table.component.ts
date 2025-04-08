import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { AlertTriangle, LucideAngularModule, Package, UserRound } from 'lucide-angular';

@Component({
  selector: 'component-reports-table',
  imports: [
    RouterLink, CommonModule,
    LucideAngularModule,
    ComponentSharedStates,
  ],
  templateUrl: './table.component.html',
})
export class ComponentReportsTable {

  readonly UserRound = UserRound;
  readonly Package = Package;
  readonly AlertTriangle = AlertTriangle;

  reports = [
    {
      id: 'DEN-1449080425',
      date: 'Ago 25, 2025 | 07:39',
      state: 'Pendiente',
      client: 'Daniel Sanchez',
      order: 'ORD-073722080425',
      reason: 'El producto me lo entregaron dañado.',
    },
    {
      id: 'DEN-1449080426',
      date: 'Ago 26, 2025 | 09:12',
      state: 'Resuelto',
      client: 'Lucía Gómez',
      order: 'ORD-073722080426',
      reason: 'El pedido llegó tarde.',
    },
    {
      id: 'DEN-1449080427',
      date: 'Ago 27, 2025 | 11:50',
      state: 'Pendiente',
      client: 'Juan Pérez',
      order: 'ORD-073722080427',
      reason: 'La comida estaba fría.',
    },
    {
      id: 'DEN-1449080428',
      date: 'Ago 28, 2025 | 14:22',
      state: 'Resuelto',
      client: 'Marta Ruiz',
      order: 'ORD-073722080428',
      reason: 'Me trajeron el producto incorrecto.',
    },
    {
      id: 'DEN-1449080429',
      date: 'Ago 29, 2025 | 16:30',
      state: 'Pendiente',
      client: 'Carlos Martín',
      order: 'ORD-073722080429',
      reason: 'El servicio fue muy lento.',
    },
    {
      id: 'DEN-1449080430',
      date: 'Sep 01, 2025 | 10:01',
      state: 'Resuelto',
      client: 'Pedro Fernández',
      order: 'ORD-073722080430',
      reason: 'La bebida estaba derramada.',
    },
    {
      id: 'DEN-1449080431',
      date: 'Sep 02, 2025 | 12:45',
      state: 'Pendiente',
      client: 'Sofía Hernández',
      order: 'ORD-073722080431',
      reason: 'Me cobraron de más.',
    },
    {
      id: 'DEN-1449080432',
      date: 'Sep 03, 2025 | 15:00',
      state: 'Resuelto',
      client: 'Ricardo López',
      order: 'ORD-073722080432',
      reason: 'Faltó un ingrediente en el plato.',
    },
    {
      id: 'DEN-1449080433',
      date: 'Sep 04, 2025 | 17:10',
      state: 'Pendiente',
      client: 'Ana Martínez',
      order: 'ORD-073722080433',
      reason: 'La comida estaba insípida.',
    },
    {
      id: 'DEN-1449080434',
      date: 'Sep 05, 2025 | 18:25',
      state: 'Resuelto',
      client: 'David Torres',
      order: 'ORD-073722080434',
      reason: 'La pizza llegó fría.',
    },
  ];


}
