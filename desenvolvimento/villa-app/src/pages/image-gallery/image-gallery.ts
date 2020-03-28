import { Component, NgZone, ViewChild } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumsRepositoryServiceProvider } from "../../providers/firebase/albums-repository-service";
import { Album } from "../../models/album";
import { Observable } from "rxjs/Observable";
import { AlbumPage } from "../album/album";

@IonicPage()
@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGalleryPage {

  albums: Observable<Album[]>;
  isLoading: boolean = true;
  isLoad: boolean = false;
  contentHeight: number;

  @ViewChild(Content) content: Content;
  scrollAmount: number;
  height: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public albumsRepository: AlbumsRepositoryServiceProvider, public zone: NgZone) {
  }

  ionViewDidLoad() {
    this.init();
  }

  init(): void {
    this.listAllAlbums();
  }

  listAllAlbums(): void {
    this.isLoading = true;

    this.albumsRepository.loadPage();
    this.albumsRepository.data.subscribe(values => {
      this.albums = values;
      this.isLoading = false;
      this.isLoad = true;
    });
  }

  albumPage(album: Album): void {
    this.navCtrl.push(AlbumPage, {
      album: album
    });
  }

  scrollHandler(event) {
    this.zone.run(() => {
      let content = this.content.getContentDimensions();
      this.contentHeight = content.scrollHeight;

      this.content.ionScrollEnd.subscribe(($event) => {
        this.scrollAmount = $event.scrollTop;

        if (this.height === null) {
          this.height = $event.scrollHeight + 1;
        }

        if (this.scrollAmount === 0) {
        } else if ((this.scrollAmount + this.height + 50) >= this.contentHeight ) {

          this.albumsRepository.more();
        }
      });
    });
  }

  loadMore(infiniteScroll) {
    setTimeout(() => {
      this.albumsRepository.more();
      infiniteScroll.complete();
    }, 500);
  }

}
