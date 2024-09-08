import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'landing-page',
  component: LandingPageComponent,
  children: [
   
    
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
