import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.css']
})
export class StaticFormComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  /*name: any;
  email: any;
  phone: any;
  topic: any;
  timePreference: any;
  subscribe: any;*/

  userModel = new User("", "", "", "", "", "");  

  topics:any = ["Angular", "React", "NodeJS"];

  topicHasError = true;

  validateTopic(value: any) {    
    if(value == "default"){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }    
  }
  
  onSubmit(){
    console.log("data : " + this.userModel);
    this.enrollmentService.enroll(this.userModel)
    .subscribe(
      res => console.log("SUCCESS = ", res),
      error => console.log("ERROR = ", error)
      );
  }

}
