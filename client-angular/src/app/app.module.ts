import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './shared/home/home.component';
import { TechComponent } from './shared/tech/tech.component';

import { SportsComponent } from './shared/sports/sports.component';
import { HealthComponent } from './shared/health/health.component';
import { NewsComponent } from './shared/news/news.component';
import { MusicComponent } from './shared/music/music.component';
import { GamingsComponent } from './shared/gamings/gamings.component';

import { AppRoutingModule } from './/app-routing.module'
import { FilmsComponent } from './shared/films/film.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    MusicComponent,
    GamingsComponent,
    NewsComponent,
    HealthComponent,
    SportsComponent,
    TechComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
