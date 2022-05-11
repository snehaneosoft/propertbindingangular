import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AttributeAngularDemo';
  typeField = "password"


  zoomIn():void{
    this.typeField = "text"
  }

  zoomOut():void{
    this.typeField = "password"
  }
}
