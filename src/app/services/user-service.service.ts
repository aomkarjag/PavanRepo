import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData:any=[]
  userName:string=''
  userPosts:any=[];
  userId:number;
  constructor(public http:HttpClient,public router:Router) { }

  getUser(){
    return  this.http.get("https://jsonplaceholder.typicode.com/users")

  }

  loggedIn(){
    return !!sessionStorage.getItem("UserData")
  }

  getPost(){
    return  this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  logout(){
    sessionStorage.removeItem("UserData");
    this.router.navigate([""])
  }
  
  diffUser(){
    let loggedInUserData=JSON.parse(sessionStorage.getItem("UserData")!);
    this.userData=this.userData.filter((element:any)=>{return element.id!==loggedInUserData.id});
    return this.userData
  }

  searchForUser(searchInput:string){
    let data=[];
    for(let i=0;i<this.userData.length;i++){
      if(this.userData[i].email.toUpperCase()==searchInput || this.userData[i].name.toUpperCase()==searchInput || this.userData[i].company.name.toUpperCase()==searchInput){
        console.log(this.userData[i]);
        data.push(this.userData[i]);
      }
    }
    this.userData=data;
  }

  checkUserValidity(userCredential:any){
    console.log(userCredential)
    for(let i=0;i<this.userData.length;i++){
      if(this.userData[i].email===userCredential.email){
        if(userCredential.password==="Pass@123"){
          sessionStorage.setItem("UserData",JSON.stringify(this.userData[i]))
          this.userName=this.userData[i].name
          this.router.navigate(["users"])
          return true;
        }else{

          return false
        }
      }
    }
    let data=JSON.parse(sessionStorage.getItem("UserData")!);
    this.userData=this.userData.filter((element:any)=>{element.userId!==data.userId})
    return false
  }

 
  showUserDetails(id:number){
    this.userId=id
    console.log(id)
    this.router.navigate([`view`,`${id}/detail`])
  }

}
