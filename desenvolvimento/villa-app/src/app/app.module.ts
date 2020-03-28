import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { InfoPage } from '../pages/info/info';
import { ContactPage } from '../pages/contact/contact';
import { EventsPage } from "../pages/events/events";
import { HomePage } from '../pages/home/home';
import { ImageGalleryPage } from "../pages/image-gallery/image-gallery";
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { BannersRepositoryServiceProvider } from '../providers/firebase/banners-repository-service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "./firebase-config";
import { IonicImageViewerModule } from "ionic-img-viewer";
import { LazyLoadImageModule } from "../lazy-load-module/lazyload-image-module";
import { NgSpinKitModule } from "ng-spin-kit";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AudioPlayerProvider } from "../providers/audio-player/audio-player";
import { EventsRepositoryServiceProvider } from "../providers/firebase/events-repository-service";
import { EventPage } from "../pages/event/event";
import { EventInfoPage } from "../pages/event-info/event-info";
import { Media } from "@ionic-native/media";
import { LoadingComponent } from "../components/loading/loading";
import { NavbarComponent } from "../components/navbar/navbar";
import { RadioRepositoryServiceProvider } from "../providers/firebase/radio-repository-service";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { SocialSharing } from "@ionic-native/social-sharing";
import { SharingProvider } from '../providers/sharing/sharing';
import { AlbumsRepositoryServiceProvider } from '../providers/firebase/albums-repository-service';
import { AlbumPage } from "../pages/album/album";
import { PaginationService } from "../providers/firebase/pagination-service";
import { LoadingSpinnerComponent } from "../components/loading-spinner/loading-spinner";
import { MapPage } from "../pages/map/map";
import { Facebook } from "@ionic-native/facebook";
import { FirebaseAuthServiceProvider } from '../providers/firebase-auth-provider/firebase-auth-service-provider';
import { LoginPage } from "../pages/login/login";
import { AppAvailability } from "@ionic-native/app-availability";
import { GooglePlus } from "@ionic-native/google-plus";
import { OnlineSalesPage } from "../pages/online-sales/online-sales";
import { SocialPage } from "../pages/social/social";
import { AboutPage } from "../pages/about/about";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    AlbumPage,
    ContactPage,
    EventsPage,
    EventPage,
    EventInfoPage,
    HomePage,
    ImageGalleryPage,
    TabsPage,
    MapPage,
    LoginPage,
    OnlineSalesPage,
    SocialPage,
    AboutPage,

    LoadingComponent,
    NavbarComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: '',
      backButtonIcon: 'ios-arrow-round-back',
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicImageViewerModule,
    LazyLoadImageModule,
    NgSpinKitModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    AlbumPage,
    ContactPage,
    EventsPage,
    EventsPage,
    EventPage,
    EventInfoPage,
    HomePage,
    ImageGalleryPage,
    TabsPage,
    MapPage,
    LoginPage,
    OnlineSalesPage,
    SocialPage,
    AboutPage
  ],
  providers: [
    AudioPlayerProvider,
    BannersRepositoryServiceProvider,
    EventsRepositoryServiceProvider,
    Media,
    StatusBar,
    SplashScreen,
    RadioRepositoryServiceProvider,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt' },
    SharingProvider,
    AlbumsRepositoryServiceProvider,
    PaginationService,
    Facebook,
    AppAvailability,
    FirebaseAuthServiceProvider,
    GooglePlus
  ]
})
export class AppModule {}
