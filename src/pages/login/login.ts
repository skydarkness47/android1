import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'login.html'
})
export class Login {
user = {};
  constructor(public navCtrl: NavController) {

  }
Login(){

  console.log(this.user);
}

}
