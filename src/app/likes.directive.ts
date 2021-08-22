import { Directive, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appLikes]'
})
export class LikesDirective {

  @Input("appLikes")
  highest!: boolean;

  constructor(private elem: ElementRef) {}

  @HostListener("change") ngOnChanges(){
    if(this.highest){
      this.elem.nativeElement.style.backgroundColor= 'blue';
      this.elem.nativeElement.style.color= 'black';


    
    }else{
      this.elem.nativeElement.style.backgroundColor= 'transparent';
      this.elem.nativeElement.style.color='white'

    }
  }

}
