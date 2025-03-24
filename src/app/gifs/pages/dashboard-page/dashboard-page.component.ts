import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gifssideMenuComponent } from '../../components/side-menu/gifs-side-menu.component';


@Component({
  selector: 'selector-name',
  templateUrl: './dashboard-page.component.html',
  imports: [RouterOutlet,gifssideMenuComponent],
})

export default class dashboardPageComponent  {

}
