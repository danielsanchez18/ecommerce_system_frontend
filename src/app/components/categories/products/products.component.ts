import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { CircleCheck, CircleMinus, LucideAngularModule, ChevronRight, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'component-categories-products',
  imports: [
    RouterLink, CommonModule,
    LucideAngularModule,
    ComponentSharedStates
  ],
  templateUrl: './products.component.html',
})
export class ComponentCategoriesProducts {

  readonly CircleCheck = CircleCheck;
  readonly CircleMinus = CircleMinus;
  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;


  products = [
    {
      id: 1,
      name: 'Hamburguesa Royale 2 libras + Papas fritas',
      category: 'Hamburguesas',
      price: 100,
      enabled: true,
      image: 'https://tofuu.getjusto.com/orioneat-local/resized2/fraR3RcPrCtjCC6ZY-2400-x.webp',
      orders: 57,
      promotion: true,
      offer: false,
      sales: 435.30
    },
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
      sales: 960.00
    },
    {
      id: 3,
      name: 'Pizza Margarita Grande',
      category: 'Pizzas',
      price: 120,
      enabled: false,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7RbPLpeQGEKr-JMLB6L9kRdCTMtUbFJfJw&s',
      orders: 85,
      promotion: false,
      offer: false,
      sales: 1020.00
    },
    {
      id: 4,
      name: 'Ensalada César con Pollo',
      category: 'Ensaladas',
      price: 55,
      enabled: true,
      image: 'https://saborusachile.cl/wp-content/uploads/2022/08/ensalada-cesar.jpg',
      orders: 45,
      promotion: false,
      offer: false,
      sales: 2475.00
    },
    {
      id: 5,
      name: 'Sándwich de Pollo Crispy',
      category: 'Sándwiches',
      price: 65,
      enabled: true,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7sGcPmsqjQq8AGWxbhVmZ1DYVjpgg_Idpg&s',
      orders: 76,
      promotion: true,
      offer: false,
      sales: 4940.00
    },
  ]

}
