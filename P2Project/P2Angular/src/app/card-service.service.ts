import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class CardServiceService {
  

  private baseUrlLogin: string = 'https://localhost:44307/api/P2/UserCollection/'


  //constructor(private http: HttpClient) { }
  constructor(private router: Router, private http: HttpClient) { }

  GetCardsList(userId : string):Observable<any[]>{
    return this.http.get<any>(this.baseUrlLogin + userId)
  }


}
