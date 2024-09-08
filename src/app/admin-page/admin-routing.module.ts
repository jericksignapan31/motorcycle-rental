import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MotorsComponent } from './layout/motors/motors.component';
import { BlocklistComponent } from './layout/blocklist/blocklist.component';
import { TrackingComponent } from './layout/tracking/tracking.component';
import { UserManagementComponent } from './layout/user-management/user-management.component';
import { BrandsComponent } from './layout/brands/brands.component';
import { VerifyUserComponent } from './layout/verify-user/verify-user.component';
import { SettingComponent } from './layout/setting/setting.component';




const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'motors', component: MotorsComponent },
      { path: 'blocklist', component: BlocklistComponent },
      { path: 'tracking', component: TrackingComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'verify-user', component: VerifyUserComponent },
      { path: 'settings', component: SettingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }
