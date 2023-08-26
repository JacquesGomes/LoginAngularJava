import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent {

  constructor(private router: Router) {}
  
  username: string = '';
  password: string = '';

  createAccount() {
    // Perform account creation logic here
    console.log('Account created:', this.username);
  }

  goToLogin() {
    this.router.navigate(['/login']); // Change 'login' to your login route
  }
}
