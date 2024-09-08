import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from '@angular/cdk/dialog';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  exports: [
    PasswordModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    RippleModule,
    CommonModule,
    DividerModule,
    SidebarModule,
    DialogModule ,
    PanelModule,
    BrowserAnimationsModule,
  ],
})
export class PrimeModule {}
