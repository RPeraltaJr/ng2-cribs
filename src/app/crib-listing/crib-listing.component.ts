import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // allow Http Request
import 'rxjs/add/operator/map'; // for Mapping result from Http Request

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(private http: Http) { } // a private instance of Http

  ngOnInit() {
    // make an HTTP GET Request (when component is initialized)
    this.http.get('data/cribs.json')
      .map(res => res.json()) // map whatever comes back as json
      .subscribe(
        // data => console.log(data) // see data in the console
        data => this.cribs = data,
        error => this.error = error.statusText // if any errors
      );
  }

}
