import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empNames: any = ['empOne', 'empTwo', 'empThree', 'empFour', 'empFive', 'empSix', 100, 200];

  empDetails: any = [
    {
      name: 'Name One',
      address: 'City One',
      email: 'one@one.com',
      mobile: 1234567890
    },
    {
      name: 'Name Two',
      address: 'City Two',
      email: 'two@two.com',
      mobile: 1234567890
    },
    {
      name: 'Name Three',
      address: 'City Three',
      email: 'three@three.com',
      mobile: 1234567890
    },
    {
      name: 'Name Four',
      address: 'City Four',
      email: 'four@four.com',
      mobile: 1234567890
    },
    {
      name: 'Name Five',
      address: 'City Five',
      email: 'five@five.com',
      mobile: 1234567890
    },
    {
      name: 'Name Six',
      address: 'City Six',
      email: 'six@six.com',
      mobile: 1234567890
    }    
  ];

}
