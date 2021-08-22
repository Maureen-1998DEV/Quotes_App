import { Quote } from '@angular/compiler';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes} from '../quotes';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuotes =new Quote(0,0, "",0,false);
  @Output() addQuote= new EventEmitter<Quotes>();
  @Input()
  addNewQuote!: Function;
  publishQuotes(){
    this.addNewQuote.emit(this.addQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
