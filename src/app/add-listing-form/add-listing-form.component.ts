import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];

  constructor() { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    console.log(data); // see added data in the console

    /* We want to add data on submit, to the Cribs array within [crib-listing.component] */
  }

}
