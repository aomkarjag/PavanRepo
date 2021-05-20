import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewAlbumsComponent } from './view-albums/view-albums.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavHeaderModule } from '../nav-header/nav-header.module';

const routes: Routes = [
  {path:"", component:ViewComponent,
  children:[
    {path:":id/details",component:ViewDetailsComponent},
    {path:":id/albums",component:ViewAlbumsComponent},
    {path:":id/posts",component:ViewPostsComponent}
  ]
}
];

@NgModule({
  declarations:[ViewComponent,ViewDetailsComponent,ViewAlbumsComponent,ViewPostsComponent],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,NavHeaderModule],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
