import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

  constructor(public userService:UserServiceService,public router:Router) { }

  ngOnInit() {
    this.userService.diffUser()
  }

  getUserId(id:number){
    console.log(id)
    this.userService.userId=id
    this.router.navigate([`view/${id}/details`])
  }

}
