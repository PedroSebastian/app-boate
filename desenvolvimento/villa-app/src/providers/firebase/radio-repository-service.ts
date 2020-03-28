import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { DatabaseServiceProvider } from "./database-service-provider";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Radio } from "../../models/radio";

@Injectable()
export class RadioRepositoryServiceProvider implements DatabaseServiceProvider{

  private radioDocument: AngularFirestoreDocument<Radio>;
  private radio: Observable<Radio>;

  constructor(private readonly angularFirestore: AngularFirestore) {

  }

  loadRadio(): Observable<Radio> {
    this.radioDocument = this.angularFirestore.collection<Radio>('v1').doc('villaclub').collection('radios').doc('radiovilla');
    this.radio = this.radioDocument.valueChanges();

    return this.radio;
  }

}
