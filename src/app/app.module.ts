import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EpisodeModule } from './episode/episode.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EpisodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
