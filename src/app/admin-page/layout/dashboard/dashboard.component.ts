import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { value: 2, label: 'TOTAL BOOKING' },
    { value: 10, label: 'TOTAL BRANDS' },
    { value: 10, label: 'TOTAL MOTORS' },
    { value: 15, label: 'TOTAL MOTOR IMAGES' },
    { value: 3, label: 'TOTAL ADMIN/USER' }
  ];
}
