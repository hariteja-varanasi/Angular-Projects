import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataOne: any;
  dataTwo: any;
  dataThree: any;

  clickEventOne(){
    this.dataOne = 'data one variable in click event one method';
  }

  clickEventTwo(event:any){
    console.log(event);
    this.dataTwo = event.type;
  }

}
