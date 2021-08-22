import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { LikesDirective } from './likes.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    QuotesFormComponent,
    LikesDirective,
    DateCountPipe,
    QuotesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
