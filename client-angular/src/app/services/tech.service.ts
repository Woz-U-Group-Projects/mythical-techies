import { Injectable } from '@angular/core';
import { Tech } from '../shared/models/tech';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TechService {
  tech: Tech[] = [
    {
      id: 1,
      name: "Ashley Banks",
      message: 'Which is better Angular or React?',
    },
    {
        id: 2,
        name: 'Paul Walker',
        message: 'Can anyone tell me about JavaScript',
    }
  ];

  constructor() { }
  
    getTech = (): Observable<Tech[]> => {
      return of(this.tech);
  
   }
}
