import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  motor: string;
  startDate: string;
  status: string;
  action: string;
}

/** Constants used to fill up the data. */
const MOTORS: string[] = [
  'Motor A',
  'Motor B',
  'Motor C',
  'Motor D',
  'Motor E',
  'Motor F',
  'Motor G',
  'Motor H',
  'Motor I',
  'Motor J'
];

const STATUSES: string[] = ['Active', 'Inactive', 'Maintenance', 'Pending'];

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth'
];

const START_DATES: string[] = [
  '2024-01-01',
  '2024-02-15',
  '2024-03-30',
  '2024-04-20',
  '2024-05-10',
  '2024-06-25',
  '2024-07-14',
  '2024-08-05',
  '2024-09-17',
  '2024-10-29'
];

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'motor', 'startDate', 'status', 'action'];
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
  const name = `${NAMES[Math.floor(Math.random() * NAMES.length)]}`;
  const motor = MOTORS[Math.floor(Math.random() * MOTORS.length)];
  const startDate = START_DATES[Math.floor(Math.random() * START_DATES.length)];
  const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];

  return {
    id: id.toString(),
    name: name,
    motor: motor,
    startDate: startDate,
    status: status,
    action: 'View'
  };
}
