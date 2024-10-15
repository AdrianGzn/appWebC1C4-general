import { Injectable } from '@angular/core';
import { IPosts } from '../models/iposts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(readonly httpClient:HttpClient) {

  }

  getPosts(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(this.url);
  }

  postPosts(object: IPosts): Observable<IPosts[]> {
    return this.httpClient.post<IPosts[]>(this.url, object)
  }
}