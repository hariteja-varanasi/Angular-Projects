import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.css']
})
export class BuiltInPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message = 'Hi, Welcome to Angular Pipe.'

  number = 5678;

  data = {
    firstName: 'Hariteja',
    lastName: 'Varanasi',
    technology: 'Angular'
  };

  date = new Date();

}
