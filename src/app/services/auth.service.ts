import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(username: string, password: string): Promise<boolean> {
    // Appel à l'API pour vérifier les identifiants
    if (username === 'birouk' && password === 'birouk') {
      // Si les identifiants sont valides, nous stockons le token dans le localStorage
      localStorage.setItem('access_token', 'token');
      this.loggedIn = true;
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  logout() {
    // Suppression du token dans le localStorage
    localStorage.removeItem('access_token');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}