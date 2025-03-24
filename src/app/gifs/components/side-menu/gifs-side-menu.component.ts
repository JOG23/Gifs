import { sideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { sideMenuOptionComponent } from './side-menu-options/side-menu-options.component';
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-side-menu-component',
  templateUrl: 'gifs-side-menu.component.html',
  imports:[sideMenuOptionComponent,sideMenuHeaderComponent]
})

export class gifssideMenuComponent {

}
