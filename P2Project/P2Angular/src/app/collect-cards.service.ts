import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Card } from './cardcollect/card';

@Injectable({
  providedIn: 'root'
})
export class CollectCardsService {

  constructor(private http: HttpClient) { }

  //Method to retrieve data from WepAPI
  GetCardsList(): Observable<Card[]>{
    return this.http.get<Card[]>('path')
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
  GetCardTest(){
    return [{
      pokeid:1,
      pokename:'bulbasaur',
      rarity:5,
      quanNorm:3,
      spriteNorm:"spritenorm",
      quanShiny:0,
      spriteShiny:"spriteshiny",
  },
  {
    pokeid:4,
    pokename:'squirtle',
    rarity:5,
    quanNorm:3,
    spriteNorm:"spritenorm",
    quanShiny:0,
    spriteShiny:"spriteshiny",
},
{
  pokeid:7,
  pokename:'charmander',
  rarity:5,
  quanNorm:3,
  spriteNorm:"spritenorm",
  quanShiny:0,
  spriteShiny:"spriteshiny",
}];
  }

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
