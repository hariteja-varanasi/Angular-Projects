import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-one',
  templateUrl: './animation-one.component.html',
  styleUrls: ['./animation-one.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: 'auto',
        opacity: 1,
        backgroundColor: 'maroon',
        color: '#fff',
        margin: "30px"
      })),
      state('closed', style({
        height: 'auto',
        opacity: 0.3,
        backgroundColor: 'deepskyblue',
        margin: "30px"
      })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1.5s')])
    ])
  ]
})
export class AnimationOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isOpen = true;

  toggleArticle(){
    this.isOpen = !this.isOpen;
  }

}
