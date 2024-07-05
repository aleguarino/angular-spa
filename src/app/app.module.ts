import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { AllGenresPipe } from './pipes/all-genres.pipe';

@NgModule({
  declarations: [AppComponent, GameListComponent, GameCardComponent, AllGenresPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
