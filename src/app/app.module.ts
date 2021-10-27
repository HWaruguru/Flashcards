import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { DateCountPipe } from './date-count.pipe';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    DateCountPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
