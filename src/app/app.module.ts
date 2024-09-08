import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './landing-page/login/login.component';
import { RegisterComponent } from './landing-page/register/register.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { HomeComponent } from './landing-page/home/home.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { AboutComponent } from './landing-page/about/about.component';
import { GetMotorcycleComponent } from './landing-page/get-motorcycle/get-motorcycle.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { ButtonModule } from 'primeng/button';
import { PrimeModule } from './prime-module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageModule } from './admin-page/admin-page.module';
import { AdminRoutingModule } from './admin-page/admin-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    GetMotorcycleComponent,
    ContactComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PrimeModule,
    AdminPageModule,
    AdminRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
