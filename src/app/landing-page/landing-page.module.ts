import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GetMotorcycleComponent } from './get-motorcycle/get-motorcycle.component';
import { ContactComponent } from './contact/contact.component';
import { PrimeModule } from '../prime-module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    GetMotorcycleComponent,
    ContactComponent,
  ],
  imports: [CommonModule, MaterialModule,PrimeModule],
})
export class LandingPageModule {}
