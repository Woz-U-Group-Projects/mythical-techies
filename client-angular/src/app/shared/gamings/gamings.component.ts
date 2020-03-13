import { Component, OnInit } from '@angular/core';

import { GamingService } from 'src/app/services/gaming.service';
import { Gaming } from '../models/gaming';



@Component({
  selector: 'app-gamings',
  templateUrl: './gamings.component.html',
  styleUrls: ['./gamings.component.css']
})
export class GamingsComponent implements OnInit {
  gamings: Gaming[];
  gamingDataService: GamingsComponent;
  gamingsDataService: any;

  constructor(private gamingsService: GamingService) {
    this.gamingsDataService = this.gamingsService;
  }

  ngOnInit() {
    this.gamingsDataService.getGamings().subscribe (gamings => this.gamings =gamings);
  }

}
