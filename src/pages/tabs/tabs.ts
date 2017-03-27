import { Component } from '@angular/core';

import { Inicio } from '../inicio/inicio';
import { Login } from '../login/login';
import { Grilla } from '../grilla/grilla';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Inicio;
  tab2Root: any = Login;
  tab3Root: any = Grilla;

  constructor() {

  }
}
