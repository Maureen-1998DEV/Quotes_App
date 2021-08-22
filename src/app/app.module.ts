import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QoutesDetailComponent } from './qoutes-detail/qoutes-detail.component';
import { TimesPipe } from './times.pipe';
import { LikesDirective } from './likes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    QuotesFormComponent,
    QoutesDetailComponent,
    TimesPipe,
    LikesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
