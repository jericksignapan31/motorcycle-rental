import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  sidebarVisible: boolean = false;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e:any): void {
      this.sidebarRef.close(e);
  }
}
