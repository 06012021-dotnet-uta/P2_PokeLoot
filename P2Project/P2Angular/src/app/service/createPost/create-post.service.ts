import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {


  private url: string = "https://localhost:44307/api/P2/Post/Create"

  constructor(private router: Router, private http: HttpClient) { }

  CreatePost(newPost: any) {
    return this.http.post<any>(this.url, newPost)
  }
}
