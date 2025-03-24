import { Component} from '@angular/core';
import { environment } from '@environments/environment';//tsconfig.json
//import { environment } from '../../../../../environments/environment';//tsconfig.json

@Component({
  selector: 'gifs-side-menu-header',
  templateUrl: './side-menu-header.component.html'
})

export class sideMenuHeaderComponent {

  envs=environment;//tsconfig.json

}
