import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../interfaces/user'
import { Status } from '../../interfaces/user'
@Component({ //Component Decorator by Angular, Class with some functionallity, always has html
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users : User[]
  
  constructor(public navCtrl: NavController) {
    let eduardo: User = {
      id: 1,
      name: 'Eduardo',
      email: 'ed@gmail.com',
      nick: 'Langosta',
      age: 28,
      active: true,
      friend: true,
      status: Status.AppearOffline
    };
    let freddy: User = {
      id: 2,
      name: 'Freddy',
      email: 'fd@gmail.com',
      nick: 'Fredtsz',
      age: 19,
      friend: false,
      active: true,
      status: Status.Online
    }
    this.users = [eduardo, freddy]
  }
  goToConversation(user){
    this.navCtrl.push('ConversationPage', {user: user})
  }

}
