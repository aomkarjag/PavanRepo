import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";  
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
searchtext:string
  constructor(public userSearch:UserServiceService){ }

  ngOnInit() {
    console.log(this.searchtext)
    let res=this.userSearch.loggedIn()
      console.log(res)
    
  }
searching(){
  console.log(this.searchtext)
  this.userSearch.searcheduser(this.searchtext.toUpperCase())
  
}

}
