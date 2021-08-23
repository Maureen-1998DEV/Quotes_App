import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  

  @Input() quote: Quotes;
  likes:number=0;
  dislikes:number=0;
  increaseRating(){
    this.likes++;
  }
  decreaseRating(){
    this.dislikes++;
  }
  @Output() isDelete = new EventEmitter<boolean>();

  deleteQuote(complete:boolean){
    this.isDelete.emit(complete);

   }
 constructor() { }

 ngOnInit(){
  }




}

