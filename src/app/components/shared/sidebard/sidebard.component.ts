import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Activity, LucideAngularModule, Tag, UsersRound, UserRoundCog, Box } from 'lucide-angular';

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

  links = [
    // { href: "/dashboard", text: "Overview", icon: Activity },
    { href: "categorias", text: "Categorías", icon: Tag },
    { href: "productos", text: "Productos", icon: Box },
    { href: "usuarios", text: "Usuarios", icon: UsersRound },
    { href: "roles", text: "Roles", icon: UserRoundCog },
  ];

}
