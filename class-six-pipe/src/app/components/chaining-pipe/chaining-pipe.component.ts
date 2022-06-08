import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaining-pipe',
  templateUrl: './chaining-pipe.component.html',
  styleUrls: ['./chaining-pipe.component.css']
})
export class ChainingPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date = new Date();

  amount = 5678;

  data = {
    firstName: "Hariteja",
    lastName: "Varanasi",
    technology: "Angular"
  };

}
