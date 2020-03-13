import { Injectable } from '@angular/core';
import { Gaming } from '../shared/models/gaming';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GamingService {
  gaming: Gaming[] = [
    {
      id: 1,
      name: "Donavan Srnsky",
      message: 'Whats your Favorite game?',
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
  
    getGaming = (): Observable<Gaming[]> => {
      return of(this.gaming);
  
   }
}
