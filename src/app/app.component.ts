import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    quotes:Quotes[] = [
      new Quotes(1,'education','Maureen','Education is key to sucess',new Date (2021,8,22)), 
      new Quotes(1,'love','Leila','love lies',new Date (2021,8,22)),
      new Quotes(1,'life','Marion','life is what happens to you when you are busy making other plans',new Date (2021,8,22))
     ]
  }


