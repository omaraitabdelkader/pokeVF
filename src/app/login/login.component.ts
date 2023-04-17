import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginError = false;

  constructor(private authService: AuthService, private router : Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).then(() => {
      if (this.authService.isLoggedIn()) {
        // Si la connexion réussit, nous redirigeons vers la page de liste des pokémons
        this.loginError = false;
        this.router.navigate(['/pokemon/all']);
      } else {
        this.loginError = true;
      }
    });
  }
}
