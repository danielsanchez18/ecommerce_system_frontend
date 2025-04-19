import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Activity, LucideAngularModule, Tag, UsersRound, UserRoundCog, Box, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'component-shared-sidebar-links',
  imports: [
    LucideAngularModule,
    RouterModule
  ],
  templateUrl: './sidebar-links.component.html',
})
export class ComponentSharedSidebarLinks {

  readonly Activity = Activity;
  readonly Tag = Tag;
  readonly Box = Box;
  readonly UsersRound = UsersRound;
  readonly UserRoundCog = UserRoundCog;
  readonly ShoppingBag = ShoppingBag;

  links = [
    { href: "categorias", text: "Categorías", icon: Tag },
    { href: "productos", text: "Productos", icon: Box },
    { href: "pedidos", text: "Pedidos", icon: ShoppingBag },
    { href: "usuarios", text: "Usuarios", icon: UsersRound },
    { href: "roles", text: "Roles", icon: UserRoundCog },
  ];


  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();

    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1024;
  }

}
