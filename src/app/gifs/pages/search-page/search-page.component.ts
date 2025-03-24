import { Gif } from './../../interfaces/gif.interface';
import { GifService } from './../../services/gifs.service';
import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'selector-name',
  templateUrl: './search-page.component.html',
  imports: [GifListComponent]
})

export default class searchPageComponent {

  gifService= inject(GifService);
  gifs=signal<Gif[]>([]);

  onSearch(query:string){
  this.gifService.searchGifs(query).subscribe((resp)=>{
    this.gifs.set(resp);
  });
 }


}
