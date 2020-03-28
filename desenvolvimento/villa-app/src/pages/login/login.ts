import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { FirebaseAuthServiceProvider } from "../../providers/firebase-auth-provider/firebase-auth-service-provider";
import { AppAvailability } from "@ionic-native/app-availability";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // private app;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: FirebaseAuthServiceProvider,
              private appAvailability: AppAvailability, private platform: Platform, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    // if (this.platform.is('ios')) {
    //   this.app = 'fb://';
    // } else if (this.platform.is('android')) {
    //   this.app = 'com.facebook.katana';
    // }
  }

  loginWithFacebook() {
    this.authService.facebookLogin().then(() => {
      this.presentToast("Autenticação realizada com sucesso.")
      this.navCtrl.setRoot(TabsPage);
    }).catch(() => {
      this.presentToast("Oops! Erro ao tentar realizar autenticação. Verifique sua conexão ou tente mais tarde.");
    });
  }

  googleLogin() {
    this.authService.googleLogin().then(() => {
      this.presentToast("Autenticação realizada com sucesso.")
      this.navCtrl.setRoot(TabsPage);
    }).catch(() => {
      this.presentToast("Oops! Erro ao tentar realizar autenticação. Verifique sua conexão ou tente mais tarde.");
    });
  }

  private presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
