import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Card } from './cardcollect/card';
import { Dictionary } from './cardcollect/IDictionary';

@Injectable({
  providedIn: 'root'
})

export class CardServiceService {
  
  constructor(private http: HttpClient) { }

  GetCardsList():Observable<Dictionary[]>{/*https://pokeloot.azurewebsites.net*/
    return this.http.get<Dictionary[]>('https://localhost:44307/api/P2/UserCollection/2')
  }



  /* Get methods look like: return this.http.get<Card[]>('path', 
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  })
  */

 /* AddCard(c:Card):Observable<boolean>{
    this.http.post<boolean>('path')
  }
  AddCardsList(c:Card[]):Observable<boolean>{
     this.http.post<boolean>('path')
  }*/

  //"testing the service" w/in angular


  AddsCardsTest()
  {
      return {
        pokeid:1,
        pokename:'bulbasaur',
        rarity:5,
        quanNorm:3,
        spriteNorm:"spritenorm",
        quanShiny:0,
        spriteShiny:"spriteshiny",
    };
    
  }
}
