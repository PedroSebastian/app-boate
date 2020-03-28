import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map/map";
import { FirebaseAuthServiceProvider } from "../../providers/firebase-auth-provider/firebase-auth-service-provider";
import { LoginPage } from "../login/login";
import { SocialPage } from "../social/social";
import { AboutPage } from "../about/about";
import { OnlineSalesPage } from "../online-sales/online-sales";
import { ContactPage } from "../contact/contact";

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  latitude: number = -29.75412390000001;
  longitude: number = -57.083291900000006;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController, private authService: FirebaseAuthServiceProvider) {
  }

  ionViewDidLoad() {

  }

  openMap() {
    let modal = this.modalCtrl.create(MapPage);
    modal.present();
  }

  openChat() {
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }

  openAbout() {
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }

  openOnlineSales() {
    let modal = this.modalCtrl.create(OnlineSalesPage);
    modal.present();
  }

  openSocial() {
    let modal = this.modalCtrl.create(SocialPage);
    modal.present();
  }

  logOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
