import { Injectable } from '@angular/core';
import { Sports } from '../shared/models/sports';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SportsService {
  sports: Sports[] = [
    {
      id: 1,
      name: "John Tenta",
      message: 'Can NOT BELIEVE THE SEASON CANCELED',
    },
    {
        id: 2,
        name: 'Darius Miller',
        message: 'Spurs For life BABY!!!!',
    },
    {
        id: 3,
        name: 'Taylor Bennett',
        message: 'Cant wait for the game tonight #HEATVSBULLS',
     },
     {
        id:4,
        name: 'Emmett Allen',
        message: '@TaylorBennett They canceled the season'
     }
  ];

  constructor() { }
  
    getSports = (): Observable<Sports[]> => {
      return of(this.sports);
  
   }
}
