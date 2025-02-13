import { Component } from '@angular/core';
import { fruitlist } from '../dummy-data';
import { CommonModule } from '@angular/common';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {
  fruits = fruitlist;

  addComment(comment: string, index: number) {
    this.fruits[index].reviews.push({
      name: 'Gast',
      text: comment,
    });
  }
}
