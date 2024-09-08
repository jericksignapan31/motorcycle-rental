import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }
