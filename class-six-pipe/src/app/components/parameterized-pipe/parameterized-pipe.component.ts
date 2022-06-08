import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameterized-pipe',
  templateUrl: './parameterized-pipe.component.html',
  styleUrls: ['./parameterized-pipe.component.css']
})
export class ParameterizedPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message = 'Hi, Welcome to Angular Pipe';

  date = new Date();

  amount = 5678;

  amountDec = 5.678;

}
