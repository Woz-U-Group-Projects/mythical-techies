import { Injectable } from '@angular/core';
import { News } from '../shared/models/news';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: News[] = [
    {
      id: 1,
      name: "Remon Allen",
      message: 'When does Bad Boys 3 come out?',
    },
    {
        id: 2,
        name: 'Milton Conley',
        message: '@Remon Already out bro!!!',
    },
    {
        id: 3,
        name: 'Taylor Wicks',
        message: 'Cant wait for the new Black Widow movie'
     },
     {
        id:4,
        name: 'Emmett Allen',
        message: 'Is there a new season of Power coming out?'
     }
  ];

  constructor() { }
  
    getNews = (): Observable<News[]> => {
      return of(this.news);
  
   }
}
