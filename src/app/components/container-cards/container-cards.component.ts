import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PostsService } from '../../services/posts.service';
import { IPosts } from '../../models/iposts';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    this.postsService.getPosts().forEach((item: IPosts) => {
      console.log(item);
    })
    this.posts = this.postsService.getPosts();
  }
}
