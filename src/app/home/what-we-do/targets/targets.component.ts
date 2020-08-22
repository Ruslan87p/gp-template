import { Component, Input } from '@angular/core';
import { transition, trigger, style, animate, state } from '@angular/animations';


@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css'],
  animations: [
    trigger('enterTrigger', [
    state('fadeIn', style({
        opacity: '1',
        transform: 'translateY(0px)',
        display: 'absolute',
        width: '100%'
    })),
    transition(':enter', [
      style({ 
        transform: 'translateY(-10px)',
        opacity: '0',
        position: 'absolute',
        width: '100%'
      }),
      animate('700ms ease')
    ]),
    transition(':leave', [
      animate('700ms ease', style({ 
        transform: 'translateY(-10px)',
        opacity: '0',
        position: 'absolute',
        width: '100%'
      }))
    ])
    ])
  ]
})


export class TargetsComponent {

  constructor() { }
  @Input('data') data: string; 
  
}
