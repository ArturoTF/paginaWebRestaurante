import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  darkmode = false;
  color = "black";

  fondo = "white";

  clickDarkMode() {
    this.darkmode = !this.darkmode;
    this.fondo = this.darkmode ? "rgb(11, 7, 7)" : "white";
    this.color = this.darkmode ? "white" : "black";


  }

  clickDiMode(){}
 
}
