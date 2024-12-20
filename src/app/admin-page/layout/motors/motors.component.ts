import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  model: string;
  brand: string;
  motorRegNo: string;
  status: string;
  action: string;
}

/** Constants used to fill up the data. */
const MODEL: string[] = [
  'Motor A',
  'Motor B',

];

const STATUSES: string[] = ['Active', 'Inactive', 'Maintenance', 'Pending'];

const BRAND: string[] = [
  'Maia',
  'Asher',
 
];

const MOTORREG: string[] = [
  '2024-01-01',
  '2024-02-15',
  
];
@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrl: './motors.component.css'
})
export class MotorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'model', 'brand', 'motorRegNo', 'status', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    // Nothing specific here for now
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const model = `${MODEL[Math.floor(Math.random() * MODEL.length)]}`;
  const brand = BRAND[Math.floor(Math.random() * BRAND.length)];
  const motorRegNo = MOTORREG[Math.floor(Math.random() * MOTORREG.length)];
  const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];

  return {
    id: id.toString(),
    model: model,
    brand: brand,
    motorRegNo: motorRegNo,
    status: status,
    action: 'View'
  };
}
