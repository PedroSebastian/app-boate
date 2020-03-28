import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Media, MEDIA_STATUS, MediaObject } from "@ionic-native/media";
import { Platform } from "ionic-angular";
import { PlayerStatus } from "./player-status-enum";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AudioPlayerProvider {

  isStreaming: boolean = false;
  audioStatus: MEDIA_STATUS = MEDIA_STATUS.NONE;
  audioSubject = new Subject;

  file: MediaObject;

  constructor(private  platform: Platform, private media: Media) {
    this.init();
  }

  getIsStreaming(): any {
    return this.isStreaming;
  }

  private play(media: string): void {
    this.platform.ready().then(() => {
      this.file = this.media.create(media);

      this.file.onStatusUpdate.subscribe(status => {
        console.log(status);
        this.changeAudioStatus(status);
      });

      this.file.onSuccess.subscribe(status => {
        console.log(status);
        this.changeAudioStatus(status);
      });

      this.file.onError.subscribe(error => console.log('Error!', error));

      this.file.play();
    });
  }

  private stop(): void {
    this.file.pause();
  }

  playOrStop(audioURL: string): void {
    if (this.audioStatus == MEDIA_STATUS.NONE || this.audioStatus == MEDIA_STATUS.PAUSED ||
      this.audioStatus == MEDIA_STATUS.STOPPED) {
      this.play(audioURL);
    } else if (this.audioStatus == MEDIA_STATUS.RUNNING) {
      this.stop();
    } else if (this.audioStatus == MEDIA_STATUS.STARTING) {
      console.log('Loading...')
    }
  }

  private changeAudioStatus(status: MEDIA_STATUS) {
    this.audioStatus = status;
    this.audioSubject.next(this.audioStatus);
  }

  private init() {
    this.audioSubject.next(this.audioStatus);
  }

  getCurrentAudioStatus(): Subject<any> {
    return this.audioSubject;
  }

}
