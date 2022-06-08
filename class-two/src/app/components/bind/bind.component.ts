import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  title = "This is the Bind Component";
  string = "I am just a string in the bind component";

  firstName: string = 'First Name variable in Bind Component';
  lastName: string = 'Last Name variable in Bind Component';
  mobile: number = 1234567890;
  constructor() { }

  display(){
    alert("You just clicked me.");
  }

  ngOnInit(): void {
  }

}
