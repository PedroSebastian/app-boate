import { Injectable } from '@angular/core';
import { DatabaseServiceProvider } from "./database-service-provider";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Album } from "../../models/album";
import {legacy_photos} from "./legacy_photos";
import {PaginationService} from "./pagination-service";

@Injectable()
export class AlbumsRepositoryServiceProvider extends PaginationService implements DatabaseServiceProvider {

  private albumsCollection: AngularFirestoreCollection<Album>;
  private albums: Observable<Album[]>;

  constructor(private readonly angularFirestore: AngularFirestore) {
    super(angularFirestore);
  }

  loadAll(): Observable<Album[]> {
    this.albumsCollection = this.angularFirestore.collection<Album>('v1').doc('villaclub')
      .collection('albums', ref => ref.orderBy('event_date', 'desc'));
    this.albums = this.albumsCollection.valueChanges();

    return this.albums;
  }

  loadPage() {
    return this.init('v1/villaclub/albums', 'event_date', {reverse: true, prepend: false});
  }

  init(path: string, field: string, opts?: any) {
    this.query = {
      path,
      field,
      limit: 5,
      reverse: false,
      prepend: false,
      ...opts
    }

    const first = this.afs.collection<Album>('v1').doc('villaclub')
      .collection('albums', ref => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit)
    });

    this.mapAndUpdate(first)

    // Create the observable array for consumption in components
    this.data = this._data.asObservable()
      .scan((acc, val) => {
        return this.query.prepend ? val.concat(acc) : acc.concat(val)
      })
  }

  // saveAll() {
  //   console.log("Operação iniciada, aguarde...");
  //
  //   for (var index = 0; index < this.legacy.length; index++) {
  //     for (var j = 0; j < legacy_photos.length; j++) {
  //       if (this.legacy[index].album_id == legacy_photos[j].album_id) {
  //         this.legacy[index].photos.push(legacy_photos[j].photo);
  //         this.legacy[index].thumbs.push(legacy_photos[j].thumb);
  //       }
  //     }
  //
  //     this.angularFirestore.collection<Album>('v1').doc('villaclub')
  //       .collection('albums').add(this.legacy[index]);
  //   }
  //
  //   console.log("Operação concluída!");
  // }

}
