import { NgModule } from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatListModule} from "@angular/material/list"
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatBadgeModule} from "@angular/material/badge"
import {MatCardModule} from "@angular/material/card"
import {MatTableModule} from "@angular/material/table"
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule

    
    
  ]
  
})
export class MaterialModule { }
