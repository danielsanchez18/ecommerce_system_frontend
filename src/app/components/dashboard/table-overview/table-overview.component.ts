import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentOrdersTable } from '@components/orders/table/table.component';
import { LucideAngularModule, ShoppingBag, Package2, Tag, UsersRound, TriangleAlert, Search, ChevronDown, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-table-overview',
  imports: [
    LucideAngularModule,
    CommonModule, RouterModule,
    ComponentOrdersTable
  ],
  templateUrl: './table-overview.component.html',
})
export class ComponentDashboardTableOverview {

  readonly ShoppingBag = ShoppingBag;
  readonly Package2 = Package2;
  readonly Tag = Tag;
  readonly UsersRound = UsersRound;
  readonly TriangleAlert = TriangleAlert;
  readonly Search = Search;
  readonly ChevronDown = ChevronDown;
  readonly TrendingUp = TrendingUp;

  categories = [
    { name: 'Pedidos',
      icon: ShoppingBag,
      title: 'Pedidos Recientes',
      link: 'pedidos',
      isActive: true,
      description: 'Revisa los pedidos últimos pedidos realizados'
    },

    { name: 'Productos',
      icon: Package2,
      title: 'Productos Populares',
      link: 'productos',
      isActive: false,
      description: 'Hecha a un vistazo a los productos más populares'
    },

    { name: 'Categorias',
      icon: Tag,
      title: 'Categorias Populares',
      link: 'categorias',
      isActive: false,
      description: 'Revisa las categorías de los productos'
    },

    { name: 'Usuarios',
      icon: UsersRound,
      title: 'Usuarios Recientes',
      link: 'usuarios',
      isActive: false,
      description: 'Revisa el reporte de usuarios y sus roles'
    },

    { name: 'Denuncias',
      icon: TriangleAlert,
      title: 'Denuncias',
      link: 'denucias',
      isActive: false,
      description: 'Reporte de las denuncias hechas por los usuarios'
    },
  ]

  categoryActive: any = this.categories.find(category => category.isActive);

  categorySelect(selectedCategory: any) {
    this.categories.forEach(category => {
      category.isActive = category === selectedCategory;
    });
    this.categoryActive = selectedCategory;
  }

}
