export class Quotes {
    likes!: boolean;
    constructor(public id: number,public title:string,public name:string, public enter:string,  public dislike:number,public like:number, public time: number){
      this.like = 0;
      this.dislike = 0;
      this.time= 0;
      
    }
  }
  