import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<LoginComponent>);
  value: string | undefined;
  loading: boolean = false;
  
  constructor(
    private router: Router,

  ){}

  login() {
    // Show SweetAlert success message
    Swal.fire({
      title: "Success!",
      text: "Successfully logged in!",
      icon: "success"
    }).then(() => {
      // Automatically navigate to /admin after the user closes the alert
      this.router.navigate(['/admin']);
    });
  }

  
  

ngOnInit(): void {
}
}
