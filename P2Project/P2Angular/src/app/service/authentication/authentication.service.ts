import { Injectable } from '@angular/core';
import { Login } from 'src/app/Models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  isAuthenticated = false;
  private baseUrlLogin: string = "https://localhost:5001/api/P2/Login/"
  private loginStatus = new BehaviorSubject<boolean>(this.CheckLoginStatus());
  private userId = new BehaviorSubject<string>(localStorage.getItem('userId') as string);

  private readonly mockUser: Login[] = [
    { username: "adrian340580", password: "password" },
    { username: "bob123", password: "password123" },
    { username: "MrRoger", password: "supa321" },
    { username: "LittleShitHead", password: "$hi3t" },
    { username: "Blob", password: "OldSchool" },
  ]

  constructor(private router: Router, private http: HttpClient) { }


  Authenticate(loginCredentials: Login): boolean {
    for (let index = 0; index < this.mockUser.length; index++) {
      if (this.mockUser[index].username === loginCredentials.username && this.mockUser[index].password === loginCredentials.password) {
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

  AuthenticateWithApi(username: string, password: string): Observable<any> {
    // return this.http.get<any>(this.baseUrlLogin + `${username}/${password}`).pipe(
    //   map(result => {

    //     //If it returned the object
    //     if (result) {
    //       this.loginStatus.next(true);
    //     }
    //   })

    // )

    // return this.http.get<any>(this.baseUrlLogin + `${username}/${password}`);
    return this.http.get<any>("https://localhost:44307/api/P2/Login/adrian.gozalez/Revature");

  }

  Logout() {
    this.isAuthenticated = false;
    this.router.navigate(['Login']);
  }

  CheckLoginStatus(): boolean {
    return false;
  }

}
