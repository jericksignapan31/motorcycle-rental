import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MenuItem } from 'primeng/api';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {


  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

  items: MenuItem[] | undefined;
  logo =
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/LOGO%20(2).png?alt=media&token=0ca58c02-3564-48ba-b023-df0f67a54083';

    readonly dialog = inject(MatDialog);

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(LoginComponent, {
        width: 'auto',

        enterAnimationDuration,
        exitAnimationDuration,
      });
    }


 openRegisterForm(): void {
  const dialogRef = this.dialog.open(RegisterComponent, {
    enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: 'auto',
      height: 'auto',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}

ngOnInit() {
  
}
}
