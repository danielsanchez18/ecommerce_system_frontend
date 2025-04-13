import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Activity, LucideAngularModule, Tag, UsersRound, UserRoundCog, Box, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'component-shared-sidebard',
  imports: [
    LucideAngularModule,
    RouterModule
  ],
  templateUrl: './sidebard.component.html',
})
export class ComponentSharedSidebard {

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

}
