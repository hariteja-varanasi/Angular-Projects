import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  third: string = 'thirdExample';

  hasError = true;

  toggleError(){
    this.hasError = !this.hasError;
    this.addClass.firstExample = this.hasError;
    this.addClass.secondExample = !this.hasError;
  }

  addClass: any = {
    firstExample: this.hasError,
    secondExample: !this.hasError
  }

}
