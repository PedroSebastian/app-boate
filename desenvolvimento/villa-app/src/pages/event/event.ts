import { Component } from '@angular/core';
import { ActionSheetController, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventInfoPage } from "../event-info/event-info";
import { Event } from "../../models/event";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { SharingProvider } from "../../providers/sharing/sharing";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  event: Event;

  isLoad: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public actionSheet: ActionSheetController, private browser: InAppBrowser, private sharing: SharingProvider,
              private toast: ToastController) {

  }

  ionViewDidLoad() {
    this.init();
  }

  init() {
    this.event = this.navParams.get("event");
    console.log(this.event);
    this.isLoad = true;
  }

  info(): void {
    let modal = this.modalCtrl.create(EventInfoPage, this.event);
    modal.present();
  }

  openFacebookEvent():void {
    this.browser.create(this.event.facebook, '_system');
  }

  openShareMenu() {
    let actionSheet = this.actionSheet.create({
      title: 'Compartilhar',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook');
            this.sharing.shareViaFacebook("Villa Club Apresenta: " +
              this.event.title, this.event.flyer, this.event.facebook).then((any) => {
                this.toast.create({
                  message: "Obrigado por compartilhar no Facebook",
                  duration: 3000
                });
            }).catch();
          }
        },
        {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            console.log('Instagram');
            this.sharing.shareViaInstagram("Villa Club Apresenta: " +
              this.event.title, this.event.flyer).then((any) => {
              this.toast.create({
                message: "Obrigado por compartilhar no Instagram",
                duration: 3000
              });
            }).catch();
          }
        },
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            console.log('Whats');
            this.sharing.shareViaWhatsApp("Villa Club Apresenta: " +
              this.event.title, this.event.flyer, this.event.facebook).then((any) => {
              this.toast.create({
                message: "Obrigado por compartilhar no WhatsApp",
                duration: 3000
              });
            }).catch();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
