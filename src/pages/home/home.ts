import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../interfaces/user'
import { Status } from '../../interfaces/user'
@Component({ //Component Decorator by Angular, Class with some functionallity, always has html
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  friends : User[]
  
  constructor(public navCtrl: NavController) {
    let eduardo: User = {
      name: 'Eduardo',
      age: 28,
      active: true,
      status: Status.AppearOffline
    };
    let freddy: User = {
      name: 'Freddy',
      age: 19,
      active: true,
      status: Status.Online
    }
    this.friends = [eduardo, freddy]
  }

}
