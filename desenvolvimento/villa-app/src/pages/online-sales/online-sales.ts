import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-online-sales',
  templateUrl: 'online-sales.html',
})
export class OnlineSalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlineSalesPage');
  }

  closeModal(): void {
    this.viewCtrl.dismiss();
  }

}
