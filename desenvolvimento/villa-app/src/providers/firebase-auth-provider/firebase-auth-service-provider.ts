import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook'
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { GooglePlus } from "@ionic-native/google-plus";
import { Platform } from "ionic-angular";

@Injectable()
export class FirebaseAuthServiceProvider {

  constructor(public facebook: Facebook, private fireAuth: AngularFireAuth,
              private googlePlus: GooglePlus, private platform: Platform) {

  }

  public facebookLogin(): Promise<any> {
    let provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then((result) => {

      }).catch(error => {
        // alert(JSON.stringify(error));
        console.log(JSON.stringify(error));

      })
    }).catch(error => {
      // alert(JSON.stringify(error));
      console.log(JSON.stringify(error));
    });

    // this.appAvailability.check(this.app)
    //   .then(
    //     (yes: boolean) => {
    //       let provider = new firebase.auth.FacebookAuthProvider();
    //
    //       firebase.auth().signInWithRedirect(provider).then(() => {
    //         firebase.auth().getRedirectResult().then((result) => {
    //           this.navCtrl.setRoot(TabsPage);
    //           this.presentToast('Login realizado com sucesso.');
    //         })
    //       }).catch(error => {
    //         alert(JSON.stringify(error));
    //         this.presentToast('Erro ao tentar autenticar-se.');
    //       });
    //     },
    //     (no: boolean) => {
    //       this.authService.facebookLogin().then(success => {
    //         this.navCtrl.setRoot(TabsPage);
    //         this.presentToast('Login realizado com sucesso.');
    //       }).catch(error => {
    //         alert(JSON.stringify(error));
    //         this.presentToast('Erro ao tentar autenticar-se.');
    //       });
    //     }
    //   );
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.fireAuth.auth.signInWithPopup(provider);

    } catch(err) {
      console.log(err)
    }

  }

  async nativeGoogleLogin(): Promise<void> {
    try {

      const gplusUser = await this.googlePlus.login({
        'webClientId': '227622857423-uk5gf6l2glldpr353v0hmmu65oqdccg3.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.fireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

    } catch(err) {
      console.log(err)
    }
  }

  googleLogin(): Promise<void> {
    if (this.platform.is('cordova')) {
      return this.nativeGoogleLogin();
    } else {
      return this.webGoogleLogin();
    }
  }

  signOut() {
    this.fireAuth.auth.signOut();
  }

}
