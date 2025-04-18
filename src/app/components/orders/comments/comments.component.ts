import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comentario } from '@interfaces/Comments';
import { Info, LucideAngularModule, Send } from 'lucide-angular';

@Component({
  selector: 'component-orders-comments',
  imports: [
    LucideAngularModule,
    CommonModule, FormsModule
  ],
  templateUrl: './comments.component.html',
})
export class ComponentOrdersComments {

  readonly Info = Info;
  readonly Send = Send;

  comentarios: Comentario[] = [
    {
      nombre: 'Carlos Ruiz',
      rol: 'Administrador',
      mensaje: 'Pedido recibido correctamente.',
      fecha: new Date(),
      foto: 'https://i.pravatar.cc/300?img=1'
    },
    {
      nombre: 'Lucía Torres',
      rol: 'Repartidor',
      mensaje: 'Estoy en camino para la entrega.',
      fecha: new Date(),
      foto: 'https://i.pravatar.cc/300?img=5'
    }
  ];

  nuevoComentario = '';

  agregarComentario() {
    if (!this.nuevoComentario.trim()) return;

    this.comentarios.push({
      nombre: 'Tú',
      rol: 'Cliente',
      mensaje: this.nuevoComentario,
      fecha: new Date(),
      foto: 'https://i.pravatar.cc/300?img=10' // o avatar del usuario actual
    });

    this.nuevoComentario = '';
  }



}
