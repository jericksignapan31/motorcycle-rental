import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

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
