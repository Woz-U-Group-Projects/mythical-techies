import { Component, OnInit } from '@angular/core';
import { Health } from '../models/health';
import { HealthService } from 'src/app/services/health.service';



@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  health: Health[];
  healthDataService: HealthService;
  healthsDataService: any;

  constructor(private healthService: HealthService) {
    this.healthDataService = this.healthService;
  }

  ngOnInit() {
    this.healthsDataService.getHealth().subscribe (health => this.health =health);
  }

}
