import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
   
  ]
})
export class LandingPageModule { }
