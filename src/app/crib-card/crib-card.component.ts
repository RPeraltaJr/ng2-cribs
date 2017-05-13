import { Component, OnInit, Input } from '@angular/core'; // Add 'Input' to pick up data from Parent Component
import { Crib } from './../crib'; // 'Crib' interface

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  // Pick up the data from Parent Component (crib-listing)
  @Input('crib') crib: Crib; // must abide by 'Crib' interface rules

  constructor() { }

  ngOnInit() {
    let bedrooms = this.crib.bedrooms;
  }

}
