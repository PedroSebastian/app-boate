import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  private facebookPage = 'fb://page/701543799888176';
  private intagram = 'https://www.instagram.com/villaclubrs/';
  private website = 'http://www.villauruguaiana.com.br/';

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
              private browser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

  closeModal(): void {
    this.viewCtrl.dismiss();
  }

  openFacebookPage() {
    this.browser.create(this.facebookPage, '_system')
  }

  openInstagram() {
    this.browser.create(this.intagram, '_system');
  }

  openWebsite() {
    this.browser.create(this.website);
  }

}
