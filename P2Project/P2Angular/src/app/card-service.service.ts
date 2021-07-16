import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class CardServiceService {
  

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // allen added
>>>>>>> ad8137128e5fea40bea59ff78df98179d6d134b0
  BuyLootbox(UserId:number, price:number):Observable<boolean>{
    return this.http.get<boolean>('https://localhost:44307/api/P2/buy/' + UserId + '/' + price)
  }
  // end

<<<<<<< HEAD
=======
  private baseUrlLogin: string = 'https://localhost:44307/api/P2/UserCollection/'
>>>>>>> main
=======
  private baseUrlLogin: string = 'https://localhost:44307/api/P2/UserCollection/'

>>>>>>> ad8137128e5fea40bea59ff78df98179d6d134b0


  //constructor(private http: HttpClient) { }
  constructor(private router: Router, private http: HttpClient) { }

  GetCardsList(userId : string):Observable<any[]>{
    return this.http.get<any>(this.baseUrlLogin + userId)
  }


}
