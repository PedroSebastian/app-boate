import { Injectable } from '@angular/core';
import { SocialSharing } from "@ionic-native/social-sharing";

@Injectable()
export class SharingProvider {

  constructor(private sharing: SocialSharing) {

  }

  public shareViaFacebook(message: string, image: string, url: string): Promise<any> {
    return this.sharing.shareViaFacebookWithPasteMessageHint(message, image, url);
  }

  public shareViaInstagram(message: string, image): Promise<any> {
    return this.sharing.shareViaInstagram(message, image);
  }

  public shareViaWhatsApp(message: string, image, url: string): Promise<any> {
    return this.sharing.shareViaWhatsApp(message, image, url);
  }

}
