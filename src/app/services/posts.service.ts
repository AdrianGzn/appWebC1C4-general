import { Injectable } from '@angular/core';
import { IPosts } from '../models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): IPosts[] {
    let posts: IPosts[] = [];
    posts.push({userId: 1, id: 1, title: 'Título', body: 'prueba'});

    return posts;
  }
}