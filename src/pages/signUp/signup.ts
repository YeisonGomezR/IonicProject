import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email : string;
  password : string;

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private angularFire: AngularFireAuth,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
    this.angularFire.auth.createUserWithEmailAndPassword(this.email, this.password);
  }

}
