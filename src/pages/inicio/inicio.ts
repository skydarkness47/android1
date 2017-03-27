import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'inicio.html'
})
export class Inicio {
user = {};
  constructor(public navCtrl: NavController) {

  }
Login(){

  console.log(this.user);
}

}
