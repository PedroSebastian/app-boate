import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Banner } from "../../models/banner";
import { DatabaseServiceProvider } from "./database-service-provider";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BannersRepositoryServiceProvider implements DatabaseServiceProvider{

  private bannersCollection: AngularFirestoreCollection<Banner>;
  private banners: Observable<Banner[]>;

  constructor(private readonly angularFirestore: AngularFirestore) {

  }

  loadAll(): Observable<Banner[]> {
    this.bannersCollection = this.angularFirestore.collection<Banner>('v1').doc('villaclub')
      .collection('banners', ref => ref.orderBy('order'));
    this.banners = this.bannersCollection.valueChanges();

    return this.banners;
  }

}
