import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { CircleCheck, CircleMinus, LucideAngularModule, Tag, CirclePlus, Trash2 } from 'lucide-angular';

@Component({
  selector: 'component-orders-edit-products-list',
  imports: [
    RouterLink, CommonModule,
    LucideAngularModule,
    ComponentSharedStates,
  ],
  templateUrl: './edit-products-list.component.html',
})
export class ComponentOrdersEditProductsList {

  readonly Tag = Tag;
  readonly CircleCheck = CircleCheck;
  readonly CircleMinus = CircleMinus;
  readonly CirclePlus = CirclePlus;
  readonly Trash2 = Trash2;

  products = [
    {
      id: 2,
      name: 'Hamburguesa Clásica + Papas fritas',
      category: 'Hamburguesas',
      price: 80,
      enabled: true,
      image: 'https://img.freepik.com/fotos-premium/hamburguesa-clasica-americana-papas-fritas-ia-generativa-fondo-blanco_209190-79.jpg',
      orders: 120,
      promotion: false,
      offer: true,
      quantity: 1
    },
    {
      id: 3,
      name: 'Pizza Margarita Grande',
      category: 'Pizzas',
      price: 120,
      enabled: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7RbPLpeQGEKr-JMLB6L9kRdCTMtUbFJfJw&s',
      orders: 85,
      promotion: true,
      offer: false,
      quantity: 4
    },
    {
      id: 4,
      name: 'Ensalada César con Pollo',
      category: 'Ensaladas',
      price: 55,
      enabled: true,
      image: 'https://saborusachile.cl/wp-content/uploads/2022/08/ensalada-cesar.jpg',
      promotion: true,
      offer: false,
      quantity: 2
    }
  ];

  promotions = [
    {
      name: 'Promocion de Verano',
      price: 80,
      products: [
        {
          id: 4,
          name: 'Ensalada César con Pollo',
          price: 55,
          enabled: true,
          image: 'https://saborusachile.cl/wp-content/uploads/2022/08/ensalada-cesar.jpg',
          quantity: 1
        },
        {
          id: 1,
          name: 'Hamburguesa Royale 2 libras + Papas fritas',
          price: 25,
          enabled: true,
          image: 'https://tofuu.getjusto.com/orioneat-local/resized2/fraR3RcPrCtjCC6ZY-2400-x.webp',
          quantity: 1
        }
      ]
    }
  ]

}
