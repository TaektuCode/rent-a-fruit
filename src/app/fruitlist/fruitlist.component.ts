import { Component } from '@angular/core';
import { fruitlist } from '../dummy-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {
  fruits = fruitlist;
  fontColorPositive = 'green';
  fontColorNegative = 'red';
}
