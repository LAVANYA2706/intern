import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 3;
  @Input() isReadOnly: boolean = false;

  constructor() {
    console.log(this.rating);
    console.log(this.isReadOnly);
    
   }

  ngOnInit(): void {
  }

}
