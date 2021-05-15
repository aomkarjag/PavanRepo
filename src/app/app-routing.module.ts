import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [{path:"", loadChildren:()=> import('./login-component/login-component.module').then(m => m.LoginComponentModule)},
{path:"users",loadChildren:()=>import("./users-component/users-component.module").then(m=>m.UsersComponentModule),canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
