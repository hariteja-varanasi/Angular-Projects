import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-two',
  templateUrl: './animation-two.component.html',
  styleUrls: ['./animation-two.component.css'],
  animations: [
    trigger('slider', [
      state('login', style({
        backgroundColor: 'darkorange',
        color: '#fff',
        padding: '30px'
      })),
      state('signUp', style({
        backgroundColor: 'violet',
        color: '#fff',
        padding: '30px'
      })),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('5s ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('5s ease-in', style({transform: 'translateX(-100%)'}))
      ]),
    ])
  ]
})
export class AnimationTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  status = true;

  toggleSlider(){
    this.status = !this.status;
  }

}
