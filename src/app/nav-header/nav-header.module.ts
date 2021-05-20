import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavHeaderComponent } from './nav-header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavHeaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[NavHeaderComponent]
})
export class NavHeaderModule { }
