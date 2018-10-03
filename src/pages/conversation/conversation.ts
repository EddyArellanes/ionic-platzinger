import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User, Status } from '../../interfaces/user'

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  user: User
  friend: User
  status: Status
  constructor(public navCtrl: NavController, public viewCtrl: ViewController ,public navParams: NavParams) {
    this.user = this.navParams.get('data')
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Volver');
  }

}
