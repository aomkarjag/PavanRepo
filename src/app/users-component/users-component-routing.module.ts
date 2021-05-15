import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponentComponent } from './users-component.component';

const routes: Routes = [
  {path:"",component:UsersComponentComponent}
];

@NgModule({
  declarations:[UsersComponentComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersComponentRoutingModule { }
