import { Component, OnInit } from '@angular/core';
import { Tech } from '../models/tech';
import { TechService } from 'src/app/services/tech.service';



@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  tech: Tech[];
  sportDataService: TechService;
  techDataService: any;

  constructor(private techService: TechService) {
    this.techDataService = this.techService;
  }

  ngOnInit() {
    this.techDataService.getTech().subscribe (tech => this.tech =tech);
  }

}
