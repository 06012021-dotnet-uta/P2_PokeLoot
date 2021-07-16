import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { User } from './cardcollect/IUser';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http:HttpClient) { }

    GetUserProfile():Observable<User>{
      return this.http.get<User>('https://localhost:44307/api/P2/Profile/4')
    }
}
