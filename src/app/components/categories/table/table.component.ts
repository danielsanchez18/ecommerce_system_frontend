import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CircleMinus, LucideAngularModule, CircleCheck, Box } from 'lucide-angular';

@Component({
  selector: 'component-categories-table',
  imports: [
    RouterLink, CommonModule,
    LucideAngularModule
  ],
  templateUrl: './table.component.html',
})
export class ComponentCategoriesTable {

  readonly Box = Box;
  readonly CircleCheck = CircleCheck;
  readonly CircleMinus = CircleMinus;

  categories = [
    {
      id: 1,
      name: 'Pizzas',
      products: 14,
      orders: 96,
      sales: 1290.30,
      enabled: false,
      image: 'https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2021/06/24181439/EE2AE929-7E96-4F45-B15F-968A9D6DAB6B.jpeg',
    },
    {
      id: 2,
      name: 'Hamburguesas',
      products: 10,
      orders: 120,
      sales: 900.50,
      enabled: true,
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/24P2OKC3RVEHRD3F2VKQ76XX7M.jpg',
    },
    {
      id: 3,
      name: 'Pasta',
      products: 8,
      orders: 85,
      sales: 752.00,
      enabled: true,
      image: 'https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg',
    },
    {
      id: 4,
      name: 'Bebidas',
      products: 15,
      orders: 150,
      sales: 320.00,
      enabled: true,
      image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg',
    },
    {
      id: 5,
      name: 'Postres',
      products: 12,
      orders: 110,
      sales: 400.50,
      enabled: true,
      image: 'https://cdn.unotv.com/images/2024/04/postres-124334.jpg',
    },
    {
      id: 6,
      name: 'Sándwiches',
      products: 9,
      orders: 70,
      sales: 310.00,
      enabled: false,
      image: 'https://www.hogar.mapfre.es/wp-content/uploads/2019/02/sandwich-americano-500x455.jpg',
    },
    {
      id: 7,
      name: 'Ensaladas',
      products: 7,
      orders: 45,
      sales: 180.00,
      enabled: true,
      image: 'https://imag.bonviveur.com/presentacion-de-la-ensalada-de-aguacate.jpg',
    },
    {
      id: 8,
      name: 'Desayunos',
      products: 6,
      orders: 40,
      sales: 200.00,
      enabled: false,
      image: 'https://comedera.com/wp-content/uploads/sites/9/2022/12/Desayono-americano-shutterstock_2120331371.jpg',
    },
    {
      id: 9,
      name: 'Sopas',
      products: 5,
      orders: 55,
      sales: 180.00,
      enabled: true,
      image: 'https://acomer.pe/wp-content/uploads/2016/08/sopawantanweb.jpg',
    },
    {
      id: 10,
      name: 'Tacos',
      products: 6,
      orders: 60,
      sales: 150.00,
      enabled: true,
      image: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg',
    },
  ];


}
