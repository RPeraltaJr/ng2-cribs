import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // allow Http Request
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
    private http: Http, // a private instance of Http
    private cribsService: CribsService
  ) { }

  ngOnInit() {

    this.cribsService.getAllCribs()
      .subscribe(
        // data => console.log(data) // see data in the console
        data => this.cribs = data,
        error => this.error = error.statusText // if any errors
      );

  }

}
