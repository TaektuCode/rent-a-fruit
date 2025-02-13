import { Component, Input } from '@angular/core';
import { fruitlist } from '../../dummy-data';

@Component({
  selector: 'app-singlefruit',
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss',
})
export class SinglefruitComponent {
  fruits = fruitlist;
  @Input() fruit = fruitlist[0];
}
