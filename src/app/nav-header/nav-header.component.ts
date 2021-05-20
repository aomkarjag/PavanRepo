import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";  
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
searchtext:string
userTempData:any=[];
  constructor(public userSearch:UserServiceService){ }

  ngOnInit() {
    console.log(this.searchtext)
    console.log(this.userSearch.userData)
    this.userTempData=this.userSearch.userData
    let res=this.userSearch.loggedIn()
      console.log(res)
  }

  getAllUsers(){
    console.log("heelo",this.searchtext,this.userTempData)
    if(this.searchtext===''){
      this.userSearch.userData=this.userTempData
    }
  }
  
searching(){
  console.log(this.searchtext)
  this.userSearch.searchForUser(this.searchtext.toUpperCase())
  
}

}
