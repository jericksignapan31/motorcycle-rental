import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { PrimeModule } from '../prime-module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';



@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ]
})
export class AdminPageModule { }
