import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  regForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private route:Router) { 
    this.regForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[6-9][0-9]{9}$")])]
    });
  }

  ngOnInit(): void {
  }

  submitHandler(data: any){
    console.log(data);
    this.userService.createUser(data).subscribe((res:any) => {
      window.alert("New User added Successfully");
      this.route.navigate(['/']);
    }, (error:any) => {
      console.log(error.stack);      
    });
  }

}
