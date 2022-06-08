import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any = [
    {
      id: 1233,
      name: "Pulpy Orange Minute Maid",
      price: 12333,
      sgst: 0,
      cgst: 0

    },
    {
      id: 1255,
      name: "Bisleri Mineral Water",
      price: 15333,
      sgst: 0,
      cgst: 0
    }
  ];

}
