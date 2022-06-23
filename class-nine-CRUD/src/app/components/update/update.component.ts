import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  constructor(private userService:UserService, private router:Router, 
    private activeRoute: ActivatedRoute, private formBuilder:FormBuilder) { 
      this.id = this.activeRoute.snapshot.url[1].path;      
    }

  id: any;
  user: any;
  
  ngOnInit(): void {
    console.log("id is : ", this.id);    
    this.user = this.userService.getSingleUser(this.id).subscribe((res:any) => {
      this.user = res;
      console.log("user is ", this.user);
    }, (error:any) => {
      console.log(error.stack);      
    });
  }

  updateUser(data:any){
    console.log("data is ", data);
    this.userService.updateUser(data, this.id).subscribe((res:any) => {
      alert("User Details Updated.");
      this.router.navigate(["/"]);
    }, (error:any) => {
      console.log(error.stack);      
    });    
  }

}
