import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit{
  showFiller = false;
  items: MenuItem[] | undefined;
  logo =
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/LOGO%20(2).png?alt=media&token=0ca58c02-3564-48ba-b023-df0f67a54083';

  ngOnInit() {
    this.items = [
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  logout() {
    console.log('Logging out');
  }
}
