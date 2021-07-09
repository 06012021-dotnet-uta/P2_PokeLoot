import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
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
}
