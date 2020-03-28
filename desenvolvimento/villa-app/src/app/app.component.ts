import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { Unsubscribe } from '@firebase/util';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { environment } from "./firebase-config";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // firebase.initializeApp(environment.firebase);
    //
    // const unsubscribe: Unsubscribe = firebase
    //   .auth()
    //   .onAuthStateChanged(user => {
    //     if (!user) {
    //       this.rootPage = LoginPage;
    //       // this.rootPage = TabsPage;
    //       unsubscribe();
    //     } else {
    //       this.rootPage = TabsPage;
    //       unsubscribe();
    //     }
    //   });

    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString('#e6e6e6');
      splashScreen.hide();
    });
  }
}
