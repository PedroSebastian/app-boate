import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {

  eventInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.eventInfo = this.navParams.data;
    console.log(this.eventInfo);
  }

  closeModal(): void {
    this.viewCtrl.dismiss();
  }

}
