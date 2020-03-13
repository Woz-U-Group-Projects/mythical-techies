import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { FilmsComponent } from './shared/films/film.component';
import { MusicComponent } from './shared/music/music.component';
import { HealthComponent } from './shared/health/health.component';
import { NewsComponent } from './shared/news/news.component';
import { SportsComponent } from './shared/sports/sports.component';
import { GamingsComponent } from './shared/gamings/gamings.component';
import { TechComponent } from './shared/tech/tech.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'film',
    component: FilmsComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'gaming',
    component: GamingsComponent
  },
  {
    path: 'tech',
    component: TechComponent
  }

 

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }