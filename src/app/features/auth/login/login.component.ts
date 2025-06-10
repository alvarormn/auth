import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  onSubmit(): void {
    this.auth.login(this.username, this.password).subscribe(user => {
      console.log('Logged in user', user);
    });
  }
}
