import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) { }

  users:any[]=[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((res:any)=>{
      console.log("users : ", res);
      this.users = res;      
    }, (error:any)=>{
      console.log(error.stack);      
    });
  }

  deleteHandler(id:any){
    console.log("id for delete ", id);    
    if(confirm(`Are you sure you want to delete user with id ${id}`)){
      this.userService.deleteUser(id).subscribe((res:any) => {
        alert('User deleted successfully');
        window.location.reload();
      }, (error:any) => {
        console.log(error.stack);        
      });
    }    
  }
}
