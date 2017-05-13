import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];

  constructor(public cribsService: CribsService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    // console.log(data); // see added data in the console

    /*
      We want to add data on submit, to the Cribs array within [crib-listing.component]
      In this case, we use the addCrib() method from [cribs.service]
    */
    this.cribsService.addCrib(data);

    // Clear the form after submit
    this.newCribForm.reset();

  }

}
