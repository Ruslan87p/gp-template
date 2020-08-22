import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-target-icon',
  templateUrl: './target-icon.component.html',
  styleUrls: ['./target-icon.component.css']
})
export class TargetIconComponent implements OnInit {


  constructor() { }
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  
  isActive: string = '0';
  icons: any[] = [ {
      iconImg: "https://plotkinruslan.com/gp/imgs/community.svg",
      title: "Help & Support",
      description: "A small river named Duden flows by their place and supplies."
    },
    {
      iconImg: "https://plotkinruslan.com/gp/imgs/adoption.svg",
      title: "Adoption",
      description: "A small river named Duden flows by their place and supplies."
    },
    {
      iconImg: "https://plotkinruslan.com/gp/imgs/charity.svg",
      title: "Volunteering",
      description: "A small river named Duden flows by their place and supplies."
    },
    {
      iconImg: "https://plotkinruslan.com/gp/imgs/book.svg",
      title: "Education",
      description: "A small river named Duden flows by their place and supplies."
    } 
  ];


  ngOnInit(): void {
  }


  isOnClick(i) {
    this.isActive = i;
    this.clickEvent.emit(i);
  }


}
