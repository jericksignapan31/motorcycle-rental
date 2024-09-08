import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';




const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }
