import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fruitlist } from '../../dummy-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss',
})
export class SinglefruitComponent {
  fruits = fruitlist;
  inputData = '';
  @Input() fruit = fruitlist[0];
  @Output() fruitname = new EventEmitter<string>();

  sendInputData() {
    this.fruitname.emit(this.inputData);
    this.inputData = '';
  }
}
