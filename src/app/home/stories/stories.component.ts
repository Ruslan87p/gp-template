import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor() { 
  }

  comment;
  isHidden: boolean = false;
  indx: number;
  stories: any[] = [
    {
      name: "Jeff Jons",
      job: "Businessman",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    },
    {
      name: "Linda Klain",
      job: "Journalist",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    },
    {
      name: "Samanta Folil",
      job: "Reporter",
      comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    }
  ];

  
  showMoreDescription(index) {
    this.stories.map( cmt => {
      this.comment = cmt.comment;
    });
    this.indx = index;
    // console.log(this.comment, index);
    console.log(this.indx);
    this.isHidden = !this.isHidden;
  }
  
  showLessDescription(index) {
    this.indx = index;
    this.stories.map( cmt => {
      cmt.comment = this.comment.slice(0, 80) + '...';
    });
    
    this.isHidden = !this.isHidden;
  }

  ngOnInit(): void {

  }







}
