import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { number: 2, title: 'TOTAL BOOKINGS' },
    { number: 10, title: 'TOTAL BRANDS' },
    { number: 10, title: 'TOTAL MOTORS' },
    { number: 15, title: 'TOTAL MOTOR IMAGES' },
    { number: 3, title: 'TOTAL ADMIN/USERS' },
    { number: 15, title: 'TOTAL MOTOR IMAGES' },

  ];
}
