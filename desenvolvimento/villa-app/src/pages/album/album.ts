import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Album } from "../../models/album";

@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {

  album: Album;
  photos: String[];
  mobx: any;

  // downloadButton;
  // ngDownloadButton: ElementRef;

  isLoading: boolean = true;
  isLoad: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private element: ElementRef, private renderer: Renderer2,
              public alertCtrl: AlertController,
              public platform: Platform) {

  }

  ionViewDidLoad() {
    this.mobx = window['mobx'];
    // this.downloadButton = document.getElementsByClassName('mobx-download');
  }

  ionViewWillEnter() {
    this.init();
  }

  init(): void {
    this.album = this.navParams.get('album');
    this.photos = this.album.photos;
  }

  ionViewDidEnter() {
    this.sleep(500).then(() => {
      this.isLoad = true;
      this.isLoading = false;

      this.mobx.init();
      this.mobx.close();

      // this.ngDownloadButton = this.downloadButton[0];
      //
      // this.renderer.listen('document', 'click', (event) => {
      //   console.log(event.target);
      //   if (event.target === this.downloadButton[0]) {
      //     console.log('Só alegria!');
      //       const alertSuccess = this.alertCtrl.create({
      //         title: `Download Succeeded!`,
      //         subTitle: `${url} was successfully downloaded to:`,
      //         buttons: ['Ok']
      //       });
      //
      //       alertSuccess.present();
      //   }
      // });

      // this.renderer.listen(this.ngDownloadButton, 'click', (event) => {
      //   const alertSuccess = this.alertCtrl.create({
      //     title: `Download Succeeded!`,
      //     subTitle: `${url} was successfully downloaded to:`,
      //     buttons: ['Ok']
      //   });
      //
      //   alertSuccess.present();
      // });
      //
      // let url = null;

      // this.downloadButton.item(0).addEventListener('click', (event: Event) => {
      //   const alertSuccess = this.alertCtrl.create({
      //     title: `Download Succeeded!`,
      //     subTitle: `${url} was successfully downloaded to:`,
      //     buttons: ['Ok']
      //   });
      //
      //   alertSuccess.present();
      //
      //   if (url != null) {
      //     // this.download(url);
      //   }
      // }, false);

      // this.mobx.on('updateMedia.modulobox', (gallery) => {
      //   url = gallery.src;
      //
      //   console.log( 'updateMedia:' + '\n' +
      //     '\t- gallery name => ' + JSON.stringify(gallery));
      // });
    });
  }

  ionViewWillLeave() {
    this.mobx.destroy();
  }

  private sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  download(url) {
    const alertSuccess = this.alertCtrl.create({
      title: `Download Succeeded!`,
      subTitle: `${url} was successfully downloaded to:`,
      buttons: ['Ok']
    });

    alertSuccess.present();

    // const fileTransfer: FileTransferObject = this.transfer.create();

    // fileTransfer.download(url, this.file.dataDirectory + 'villa-image.jpg',
    //   true, {'Access-Control-Allow-Origin': '*'}).then((entry) => {
    //   console.log('download complete: ' + entry.toURL());
    //   const alertSuccess = this.alertCtrl.create({
    //     title: `Download Succeeded!`,
    //     subTitle: `${url} was successfully downloaded to: ${entry.toURL()}`,
    //     buttons: ['Ok']
    //   });
    //
    //   alertSuccess.present();
    // }, (error) => {
    //   const alertFailure = this.alertCtrl.create({
    //     title: `Download Failed!`,
    //     subTitle: `${url} was not successfully downloaded. Error code: ${error.code}`,
    //     buttons: ['Ok']
    //   });
    //
    //   alertFailure.present();
    // });
  }

}
