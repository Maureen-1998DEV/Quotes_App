import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    var today:Date = new Date(); 
    var todayTime:any = new Date(today.getYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayTime) 
    const secondsDay = 86400; 
    var dateDifference = dateDifference*0.001; 
    var dateCounts = dateDifference/secondsDay;

    if (dateCounts >= 1 && value > todayTime){
      return dateCounts;
    }else{
      return 0;
    }
  }
}
