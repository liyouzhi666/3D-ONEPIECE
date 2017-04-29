import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor(){

  }
  showLuffy() {
    console.log('Luffy');
    this.title = 'MONKEY D LUFFY';
    $('#personModal').modal('toggle');

  }
  showChopper(){
    console.log('Chopper');
  }
}
