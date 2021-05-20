import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public posts:UserServiceService) { }

  ngOnInit(): void {
    this.posts.getPost().subscribe(response=>{
      this.posts.userPosts=response
    })
  }

}
