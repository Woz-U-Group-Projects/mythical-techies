import { Component, OnInit } from '@angular/core';
import { Sports } from '../models/sports';
import { SportsService } from 'src/app/services/sports.service';



@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: Sports[];
  sportDataService: SportsService;
  sportsDataService: any;

  constructor(private sportsService: SportsService) {
    this.sportsDataService = this.sportsService;
  }

  ngOnInit() {
    this.sportsDataService.getSports().subscribe (sports => this.sports =sports);
  }

}
