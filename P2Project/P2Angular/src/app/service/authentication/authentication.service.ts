import { Injectable } from '@angular/core';
import { Login } from 'src/app/Models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;


  private readonly mockUser: Login[] = [
    { email: "adrian340580@gmail.com", password: "password" },
    { email: "bob123@gmail.com", password: "password123" },
    { email: "MrRoger@gmail.com", password: "supa321" },
    { email: "LittleShitHead@gmail.com", password: "$hi3t" },
    { email: "Blob@gmail.com", password: "OldSchool" },
  ]

  constructor(private router: Router) { }


  Authenticate(loginCredentials: Login): boolean {
    for (let index = 0; index < this.mockUser.length; index++) {
      if (this.mockUser[index].email === loginCredentials.email && this.mockUser[index].password === loginCredentials.password) {
        this.router.navigate([`Home`])
        this.isAuthenticated = true;
        return this.isAuthenticated;
      } else {
        this.isAuthenticated = false;
        return this.isAuthenticated;
      }
    }

    return false;
  }

  Logout() {
    this.isAuthenticated = false;
    this.router.navigate(['Login']);
  }

}
