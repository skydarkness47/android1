import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Usuario} from "../../pages/grilla/usuario";
@Component({
  selector: 'page-contact',
  templateUrl: 'grilla.html'
})
export class Grilla {


   USUARIOS: Usuario[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
 ];

 Datos(){
   console.log(this.USUARIOS);
 }
  constructor(public navCtrl: NavController) {
    
  }


}
