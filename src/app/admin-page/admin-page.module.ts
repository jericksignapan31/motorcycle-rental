import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { PrimeModule } from '../prime-module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MotorsComponent } from './layout/motors/motors.component';
import { BlocklistComponent } from './layout/blocklist/blocklist.component';
import { TrackingComponent } from './layout/tracking/tracking.component';
import { UserManagementComponent } from './layout/user-management/user-management.component';
import { BrandsComponent } from './layout/brands/brands.component';
import { VerifyUserComponent } from './layout/verify-user/verify-user.component';
import { SettingComponent } from './layout/setting/setting.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { BookingComponent } from './layout/booking/booking.component';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent,
    MotorsComponent,
    BlocklistComponent,
    TrackingComponent,
    UserManagementComponent,
    BrandsComponent,
    VerifyUserComponent,
    SettingComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    BrowserModule ,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AdminPageModule { }
