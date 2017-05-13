// A Service allows you to reuse this logic (in multiple places)
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // allow Http Request
import { Subject } from 'rxjs/Subject'; // an observer and observable
import 'rxjs/add/operator/map'; // for Mapping result from Http Request

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data); // whenever data comes through, send it through the subject
  }

}
