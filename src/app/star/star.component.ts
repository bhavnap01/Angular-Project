import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropwidth: number = 75;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropwidth = this.rating * 75 / 5;
  }

  onClick():void{
    this.ratingClicked.emit(`This rating is ${this.rating}!!`)
  }
}
