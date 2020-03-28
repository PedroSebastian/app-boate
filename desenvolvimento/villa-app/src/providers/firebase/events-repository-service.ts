import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { DatabaseServiceProvider } from "./database-service-provider";
import { Event } from "../../models/event";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class EventsRepositoryServiceProvider implements DatabaseServiceProvider{

  private eventsCollection: AngularFirestoreCollection<Event>;
  private events: Event[];

  private eventDocument: AngularFirestoreDocument<Event>;
  private event: Observable<Event>;

  constructor(private readonly angularFirestore: AngularFirestore) {

  }

  loadAll(): AngularFirestoreCollection<Event> {
    let today = this.formatDate(new Date());

    this.eventsCollection = this.angularFirestore.collection<Event>('v1').doc('villaclub')
      .collection('events', ref => ref
        .where('date', '>=', today)
        .orderBy('date')
      );

    return this.eventsCollection;
  }

  loadBy(id): Observable<Event> {
    this.eventDocument = this.angularFirestore.collection<Event>('v1').doc('villaclub')
      .collection('events').doc(id);
    this.event = this.eventDocument.valueChanges();

    return this.event;
  }

  private formatDate(date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}
