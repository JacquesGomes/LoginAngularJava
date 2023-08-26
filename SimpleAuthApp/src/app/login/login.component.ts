import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  password: string = '';

  login() {
    // Perform login logic here
    console.log('Logged in:', this.username);
  }

  goToRegistration() {
    this.router.navigate(['/create-account']); // Change 'registration' to your registration route
  }

}
