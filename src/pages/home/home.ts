import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ //Component Decorator by Angular, Class with some functionallity, always has html
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
