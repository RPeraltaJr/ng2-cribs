// A Service allows you to reuse this logic (in multiple places)
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // allow Http Request
import 'rxjs/add/operator/map'; // for Mapping result from Http Request

@Injectable()
export class CribsService {

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }

}
