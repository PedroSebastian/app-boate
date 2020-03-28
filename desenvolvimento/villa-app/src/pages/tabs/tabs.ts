import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { ContactPage } from '../contact/contact'
import { EventsPage } from "../events/events";
import { HomePage } from '../home/home';
import { ImageGalleryPage } from "../image-gallery/image-gallery";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsPage;
  tab3Root = ImageGalleryPage;
  tab4Root = ContactPage;
  tab5Root = InfoPage;

  constructor() {

  }
}
