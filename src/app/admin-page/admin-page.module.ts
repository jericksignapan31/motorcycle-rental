import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminPageModule { }
