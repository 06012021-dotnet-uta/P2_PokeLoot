import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class GameService {
  



  private gameUrlPath: string = 'https://pokeloot.azurewebsites.net/api/P2/EarnCoins/';

  

  constructor(private router: Router, private http: HttpClient) { }

  GetCardsList(userId : string, amountCoins : number):Observable<any[]>{
    return this.http.get<any>(this.gameUrlPath + userId + '/' + amountCoins)
  }

}
