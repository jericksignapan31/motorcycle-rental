import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landing-page/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: 'login', title: 'Login', component: LoginComponent },
      { path: 'navbar', title: 'Navbar', component: NavbarComponent },
      
    ],
  },

  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
