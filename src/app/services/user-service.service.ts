import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData:any=[]

  constructor(public http:HttpClient) { }

  getUser(){
    return  this.http.get("https://jsonplaceholder.typicode.com/users")

  }

  checkUserValidity(userCredential:any){
    console.log(userCredential)
    for(let i=0;i<this.userData.length;i++){
      if(this.userData[i].email===userCredential.email){
        if(userCredential.password==="Pass@123"){
          sessionStorage.setItem("UserData",JSON.stringify(this.userData[i]))
          return true;
        }else{

          return false
        }
      }else{
        return false
      }
    }
    return false
  }
}
