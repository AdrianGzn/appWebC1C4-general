import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calories-section',
  standalone: true,
  imports: [],
  templateUrl: './calories-section.component.html',
  styleUrl: './calories-section.component.css'
})
export class CaloriesSectionComponent {

  @Input() caloriesChild: number[] = [0, 0, 0];

  constructor() {}

}
