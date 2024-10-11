import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IPosts } from '../../models/iposts';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post:IPosts = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
  
}
