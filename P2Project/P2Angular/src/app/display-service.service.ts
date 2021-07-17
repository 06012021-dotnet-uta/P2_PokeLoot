import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  
  
  private url: string = 'https://pokeloot.azurewebsites.net/api/P2/DisplayBoard';
  //private url: string = '';

  constructor( private router:Router, private http:HttpClient) { }

  DisplayBoard():Observable<any[]>{
    return this.http.get<any>(this.url);
  }

  /*getPokemon(id: number):Observable<any>{
      return;
  }*/
}
