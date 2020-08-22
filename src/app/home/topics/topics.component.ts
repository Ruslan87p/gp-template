import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  slides: any[] = [
    [{
      title: 'Providing Children Care and Education',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: 'http://plotkinruslan.com/gp/imgs/4s.jpg',
    },
    {
      title: 'Safeguarding & Consultancy Services',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: 'http://plotkinruslan.com/gp/imgs/5s.jpg',
    },
    {
      title: 'Adoption, Fostering & Children Care',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: 'http://plotkinruslan.com/gp/imgs/1s.jpg',
    }
  ],
      [{
        title: 'Adoption, Fostering & Children Care',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://plotkinruslan.com/gp/imgs/1s.jpg',
      },
      {
        title: 'Disadvantages Young People',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://plotkinruslan.com/gp/imgs/2s.jpg',
      },
      {
        title: 'Meditation & Crisis Services',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://plotkinruslan.com/gp/imgs/3s.jpg',
      }
    ],
      [{
        title: 'Disadvantages Young People',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://plotkinruslan.com/gp/imgs/2s.jpg',
      },
      {
        title: 'Meditation & Crisis Services',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://plotkinruslan.com/gp/imgs/4s.jpg',
      },
      {
        title: 'Providing Children Care and Education',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://plotkinruslan.com/gp/imgs/3s.jpg',
      }],
    ];

  constructor() {}


  ngOnInit(): void {}


}
