import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
const routes: Routes = [{path:"",component:LoginComponentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule,CommonModule],
  exports: [RouterModule],
  declarations:[
    LoginComponentComponent
  ]
})
export class LoginComponentRoutingModule { }
