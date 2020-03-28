import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsRepositoryServiceProvider } from "../../providers/firebase/events-repository-service";
import { Event } from "../../models/event";
import { AngularFirestoreCollection } from "angularfire2/firestore";
import {EventPage} from "../event/event";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Event[];
  eventsCollection: AngularFirestoreCollection<Event>;
  isLoading: boolean = false;
  isLoad: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eventsRepository: EventsRepositoryServiceProvider) {

  }

  ionViewDidLoad() {
    this.listAllEvents();
  }

  listAllEvents(): void {
    this.isLoading = true;
    this.eventsCollection = this.eventsRepository.loadAll();

    this.eventsCollection.snapshotChanges().subscribe(eventsList => {
      this.events  = <Event[]> eventsList.map(item => {
        this.isLoading = false;

        this.isLoad = true;

        return {
          id: item.payload.doc.id,
          date: item.payload.doc.data().date,
          description: item.payload.doc.data().description,
          facebook: item.payload.doc.data().facebook,
          flyer: item.payload.doc.data().flyer,
          hour: item.payload.doc.data().hour,
          title: item.payload.doc.data().title
        }
      });
    });
  }

  eventPage(event: Event) {
    this.navCtrl.push(EventPage, {
      event: event
    });
  }

}
