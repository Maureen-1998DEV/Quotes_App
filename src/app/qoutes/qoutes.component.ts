
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {
  quotes:Quotes[] = [
   new Quotes(1,'education','Maureen','Education is key to sucess',new Date (2021,8,22)), 
   new Quotes(1,'love','Leila','love lies',new Date (2021,8,22)),
   new Quotes(1,'life','Marion','life is what happens to you when you are busy making other plans',new Date (2021,8,22))
  ]
  addnewQuotes(quote:Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.datePublished = new Date(quote.datePublished)
    this.quotes.push(quote)
  }
  deleteQuote(isDelete, index){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
 
  constructor () { }

  ngOnInit(){
  }
}

  // private duration!: number;
  // private id:number =0;
 
//   increaseRating(isRating: any,index: number){
//     if(isRating){
//       this.quotes[index].likes+=1;
//       this.getmost();
//     }else{
//       this.quotes[index].dislikes +=1;
//     }
//   }
// }

//   get addNewQuote(){
//     return this.addNewQuote.bind(this);
//   }

//   deleteQuotes(isDelete: any,index: number){
//     if(isDelete){
//       this.quotes.splice(index,1);
//     }
//   }

//   addNewQuote(id: number,title:string,author:string,entry:string,times:number){
//     let quotes:Quote=new Quote(id,title,author,entry,0,0,0,false)
//     this.id += 1;
//     quotes.id = this.id;
//     this.duration = setInterval(()=>{
//        quote.time += 1;
//     },1000);
//     this.quotes.push(quotes);

//   }
//   getmost(){
//     let highest = 0;
//     let highestQuote: Quote;
//     for(let quote of this.quotes){
//       if(quote.like>highest){
//         highest=quote.like;
//         highestQuote=quote;
//       }
//     }
//     console.log(highestQuote);
//     this.getId(mostQuote);
//   }

//   getId(change:Quote){
//     for(let quote of this.quotes){
//       if(quote.id == change.id){
//         quote.highest=true;
//       }
//       else{
//         quote.highest=false;
//       }
//     }
//   }

 
 
  
