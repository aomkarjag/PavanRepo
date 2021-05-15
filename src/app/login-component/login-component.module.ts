import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LoginComponentRoutingModule } from './login-component-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginComponentModule { }
