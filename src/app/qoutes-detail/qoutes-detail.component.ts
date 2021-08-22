import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoutes-detail',
  templateUrl: './qoutes-detail.component.html',
  styleUrls: ['./qoutes-detail.component.css']
})
export class QoutesDetailComponent implements OnInit {

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
