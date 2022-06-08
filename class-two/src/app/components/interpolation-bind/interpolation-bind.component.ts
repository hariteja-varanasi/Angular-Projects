import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-bind',
  templateUrl: './interpolation-bind.component.html',
  styleUrls: ['./interpolation-bind.component.css']
})
export class InterpolationBindComponent implements OnInit {
  title = "This is the Interpolation Component";
  string = "I am just a string in the interpolation component";

  imgURL = '../../../assets/images/chelsea4.jpg';

  siteURL = window.location.href;

  greeting() {
    return 'You are inside the greeting method.';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
