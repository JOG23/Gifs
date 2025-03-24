import { Component,input,InputSignal,signal } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css',

})
export class GifListItemComponent {

  /*La función required<T>() fue introducida en TypeScript 4.9 y
  se usa para marcar un tipo como obligatorio,
   eliminando cualquier undefined o optional (?) de sus propiedades. */
  imageUrl = input.required<string>();

}
