import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {UserServiceService} from "../services/user-service.service";
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit { 
  showErrorMessage:boolean=true;
  constructor(public auth:UserServiceService){
   
  } 
  SignupForm:FormGroup;
  

  ngOnInit(){
    this.auth.getUser().subscribe(response=>{
      this.auth.userData=response
    })
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
          'password':new FormControl(null,[Validators.required]),
          'email':new FormControl(null,[Validators.required,Validators.email]),
      }),
    });

    this.SignupForm.setValue({
      'userData':{
        'password':'',
        'email':''
      },
    })
  }

  onSubmit(){
    console.log(this.auth.userData);
    let result = this.auth.checkUserValidity(this.SignupForm.value.userData)
    console.log(result);
    this.showErrorMessage=result
    console.log(this.SignupForm);
  }

 
}


