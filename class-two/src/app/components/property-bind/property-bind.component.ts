import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  title = "This is a Property Bind Component";

  string = "I am just a string in the Property Bind Component";

  myId = "fullName";

  bindId = "Angular";

  constructor() { }

  ngOnInit(): void {
  }

}
