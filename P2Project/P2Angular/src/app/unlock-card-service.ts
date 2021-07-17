import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UnlockCardService {
  

  private rootUrl: string = 'https://pokeloot.azurewebsites.net'
  private lootBoxUrl: string = this.rootUrl + 'api/P2/Lootbox/'
  private updateUserUrl: string = this.rootUrl + 'api/P2/CoinBalance/'


  //constructor(private http: HttpClient) { }
  constructor(private router: Router, private http: HttpClient) { }

  RollLootbox(userId : string):Observable<any[]>{
    return this.http.get<any>(this.lootBoxUrl + userId)
  }

  GetBalance(userId : string):Observable<any[]>{
    return this.http.get<any>(this.updateUserUrl + userId)
  }


}
