import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PostsService } from '../../services/posts.service';
import { IPosts } from '../../models/iposts';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-container-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './container-cards.component.html',
  styleUrl: './container-cards.component.css'
})
export class ContainerCardsComponent implements OnInit{
  constructor(readonly postsService: PostsService) {}

  posts: IPosts[] = [];
  newObject: IPosts = {userId: 1, id: 1, title: "string", body: "string"}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((value: IPosts[]) => {
      console.log(value);
      
      value.forEach((item: IPosts) => {
        console.log(item);
      })

      this.posts = value;
    })

    this.postsService.postPosts(this.newObject).subscribe((value: IPosts[]) => {
      console.log(value);
    })
    
  }
}
