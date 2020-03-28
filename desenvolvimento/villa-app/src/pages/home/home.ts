import { AudioPlayerProvider } from "../../providers/audio-player/audio-player";
import { animateFactory } from "ng2-animate";
import { Banner } from "../../models/banner";
import { BannersRepositoryServiceProvider } from "../../providers/firebase/banners-repository-service";
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Radio } from "../../models/radio";
import { RadioRepositoryServiceProvider } from "../../providers/firebase/radio-repository-service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [animateFactory(1000, 200, 'ease-in')]
})
export class HomePage {

  banners: Observable<Banner[]>;
  radio: Observable<Radio>;
  radioUrl: string;
  isLoadingRadio: boolean = false;

  isLoad: boolean = false;
  isLoading: boolean = false;

  imagesLength: number = 0;

  playerStatus: number = 0;

  background: string = '';

  @ViewChild(Slides) slides: Slides;

  constructor(public player: AudioPlayerProvider, private ref: ChangeDetectorRef, public navCtrl: NavController,
              public navParams: NavParams, private bannersRepository: BannersRepositoryServiceProvider,
              private radioRepository: RadioRepositoryServiceProvider) {

  }

  ionViewDidLoad() {
    this.loadRadio();
    this.loadBanners();
    this.chooseBackground();
  }

  private loadBanners() {
    this.isLoading = true;
    this.banners = this.bannersRepository.loadAll();

    this.banners.subscribe(image => {
      this.isLoading = false;

      this.slideTo();

      this.isLoad = true;
      this.imagesLength = image.length;
    });
  }

  private loadRadio() {
    this.isLoadingRadio = true;
    this.radio = this.radioRepository.loadRadio();

    this.radio.subscribe(radio => {
      this.radioUrl = radio.url;

      this.isLoadingRadio = false;
    });
  }

  chooseBackground(): void {
    var random = Math.floor(Math.random() * 2);
    if (random == 0) {
      this.background = 'assets/images/VillaWallpapper1.jpg';
    } else {
      this.background = 'assets/images/VillaWallpapper2.jpg';
    }
  }

  slideTo(): void {
    try {
      // console.log(this.slides);
      this.slides.slideTo(0, 500);
      this.slides.update();
    } catch (exception) {
      console.error("Error in slides!");
    }
  }

  play(): void {
    this.subscribeAudioStatus();
    this.player.playOrStop(this.radioUrl);
  }

  private subscribeAudioStatus() {
    this.player.getCurrentAudioStatus().subscribe(value => {
      this.playerStatus = value;
      this.ref.detectChanges();
      console.log('Player status: ' + this.playerStatus);
    });
  }

}
