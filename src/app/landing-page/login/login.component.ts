import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
 
  value: string | undefined;
  loading: boolean = false;
  

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
