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
  private baseUrlLogin: string = "https://localhost:44307/api/P2/Login/"
  private loginStatus = new BehaviorSubject<boolean>(this.CheckLoginStatus());
  private userId = new BehaviorSubject<string>(localStorage.getItem('userId') as string);

  constructor(private router: Router, private http: HttpClient) { }



  AuthenticateWithApi(username: string, password: string): Observable<any> {

    return this.http.get<any>(this.baseUrlLogin + `${username}/${password}`).pipe(
      map(result => {

        if (result != null) {
          this.loginStatus.next(true);
          localStorage.setItem('loginStatus', "1");
          localStorage.setItem('userId', result.userId)
        }

        return result
      }));
  }

  Logout() {
    this.isAuthenticated = false;
    localStorage.setItem('loginStatus', "0");
    localStorage.removeItem('userId')
    this.router.navigate(['Login']);
  }

  CheckLoginStatus(): boolean {
    if (localStorage.getItem('loginStatus') === '1')
      return true;
    return false;
  }

  get CurrentUserId() {
    return this.userId.asObservable()
  }

  get IsLoggedIn() {
    return this.loginStatus.asObservable()
  }

}
