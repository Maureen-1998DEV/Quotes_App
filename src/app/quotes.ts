
export class Quotes {
    
    constructor(public id: number,public title:string,public name:string, public enter:string,public datePublished:Date, public like:number, public dislike:number){
     this.like= 0;
       this.dislike = 0;
    //   this.time= 0;
    //   this.most=false;
      
    }
  }
  