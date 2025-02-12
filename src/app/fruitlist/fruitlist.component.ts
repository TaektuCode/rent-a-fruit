import { Component } from '@angular/core';
import { fruitlist } from '../dummy-data';

@Component({
  selector: 'app-fruitlist',
  imports: [],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {
  fruits = fruitlist;
}
