import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponentComponent } from './users-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavHeaderModule } from '../nav-header/nav-header.module';

const routes: Routes = [
  {path:"",component:UsersComponentComponent}
];

@NgModule({
  declarations:[UsersComponentComponent],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,NavHeaderModule],
  exports: [RouterModule]
})
export class UsersComponentRoutingModule { }
