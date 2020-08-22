import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers-section',
  templateUrl: './volunteers-section.component.html',
  styleUrls: ['./volunteers-section.component.css']
})
export class VolunteersSectionComponent implements OnInit {

  countries = [];
  constructor() { }

  ngOnInit(): void {
    this.countries = [ "China", "United States", "Australia", "Brazil", "South Africa", "Ukraine" ];
  }

}
