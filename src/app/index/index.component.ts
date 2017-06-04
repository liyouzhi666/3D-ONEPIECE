import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
declare var $:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public title = '';
  public describe = '';
  public personImg = '';
  constructor(private http : HttpService) { }

  ngOnInit() {
  }

  showLuffy() {
    this.title = 'MONKEY D LUFFY';
    this.personImg = '/assets/img/luffy.jpeg';
    this.http.get('http://localhost:3000/api/products').then(
      success =>{
        debugger;
      }
    )
    $('#personModal').modal('toggle');
  }
  showChopper(){
    this.title = 'CHOPPER';
    this.personImg = '/assets/img/chopper.jpeg';
    $('#personModal').modal('toggle');
  }
  showNami(){
    this.title = 'NAMI';
    this.personImg = '/assets/img/nami.jpeg';
    $('#personModal').modal('toggle');
  }
  showSanji(){
    this.title = 'SANJI';
    this.personImg = '/assets/img/sanji.jpeg';
    $('#personModal').modal('toggle');
  }
  showUsopp(){
    this.title = 'GOD USOPP';
    this.personImg = '/assets/img/usopp.jpeg';
    $('#personModal').modal('toggle');
  }
  showZoro(){
    this.title = 'RORONOA ZORO';
    this.personImg = '/assets/img/zoro.jpeg';
    $('#personModal').modal('toggle');
  }
}
