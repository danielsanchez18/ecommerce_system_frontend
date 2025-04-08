import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedStates } from '@components/shared/states/states.component';
import { CircleCheck, CircleMinus, LucideAngularModule, Tag } from 'lucide-angular';

@Component({
    selector: 'component-products-table',
  imports: [
    RouterLink,
    CommonModule,
    ComponentSharedStates,
    LucideAngularModule
  ],
  templateUrl: './table.component.html',
})
export class ComponentProductsTable {

  readonly Tag = Tag;
  readonly CircleCheck = CircleCheck;
  readonly CircleMinus = CircleMinus;

  products = [
    {
      id: 1,
      name: 'Hamburguesa Royale 2 libras + Papas fritas',
      category: 'Hamburguesas',
      price: 100,
      enabled: true,
      image: 'https://tofuu.getjusto.com/orioneat-local/resized2/fraR3RcPrCtjCC6ZY-2400-x.webp',
      orders: 57,
      promocion: true,
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
      promocion: false,
      offer: false,
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
      promocion: false,
      offer: true,
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
      promocion: false,
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
      promocion: true,
      offer: false,
      sales: 4940.00
    },
    {
      id: 6,
      name: 'Hot Dog Especial',
      category: 'Hot Dogs',
      price: 50,
      enabled: true,
      image: 'https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg',
      orders: 200,
      promocion: false,
      offer: false,
      sales: 10000.00
    },
    {
      id: 7,
      name: 'Burrito de Carne Asada',
      category: 'Burritos',
      price: 90,
      enabled: true,
      image: 'https://animalgourmet.com/wp-content/uploads/2024/05/Burrito-con-carne-asada-frijoles-y-arroz-rojo.jpg',
      orders: 110,
      promocion: false,
      offer: false,
      sales: 9900.00
    },
    {
      id: 8,
      name: 'Batido de Fresa',
      category: 'Bebidas',
      price: 40,
      enabled: false,
      image: 'https://mx.boost.com/sites/g/files/lpfasj161/files/2024-05/SMOOTHIE_FRESA.jpg',
      orders: 140,
      promocion: false,
      offer: false,
      sales: 5600.00
    },
    {
      id: 9,
      name: 'Café Americano',
      category: 'Bebidas',
      price: 25,
      enabled: true,
      image: 'https://losavilez.pe/pideonline/wp-content/uploads/2023/09/IMAGENES-AVILEZ_amricano.png.webp',
      orders: 200,
      promocion: true,
      offer: false,
      sales: 5000.00
    },
    {
      id: 10,
      name: 'Tarta de Manzana',
      category: 'Postres',
      price: 35,
      enabled: true,
      image: 'https://www.hola.com/horizon/landscape/3f40d4998fc3-tarta-manzan-arguinano-t.jpg',
      orders: 90,
      promocion: false,
      offer: true,
      sales: 3150.00
    }
  ];


}
