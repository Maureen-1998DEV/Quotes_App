import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoutes-detail',
  templateUrl: './qoutes-detail.component.html',
  styleUrls: ['./qoutes-detail.component.css']
})
export class QoutesDetailComponent implements OnInit {
  @Input()quotes!: Quotes;
  @Output() isDelete = new EventEmitter<boolean>();

  @Output() isRating = new EventEmitter<boolean>();

  deleteQuote(complete:boolean){
    this.isDelete.emit(complete);
  }
  increaseRating(rating:boolean) {
    this.isRating.emit(rating);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
