import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmsService } from 'src/app/services/film.service';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];
  filmDataService: FilmsService;
  filmsDataService: any;

  constructor(private filmsService: FilmsService) {
    this.filmsDataService = this.filmsService;
  }

  ngOnInit() {
    this.filmsDataService.getFilms().subscribe (films => this.films =films);
  }

}
