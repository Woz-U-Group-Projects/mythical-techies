import { Component, OnInit } from "@angular/core";
import {HomeService } from "../home.service";
import {Home } from "../models/home";

@Component({
  selector: "app-home-display",
  templateUrl: "./home-display.component.html",
  styleUrls: ["./home-display.component.css"]
})
export classHomeDisplayComponent implements OnInit {
  constructor(private homeService:HomeService) {}
  newHome:Home = newHome();
  homes:Home[] = [];

  getHomes() {
    this.homeService.getHomes().subscribe(homes => (this.homes = homes));
  }

  addHome() {
    this.homeService.addHome(this.newHome).subscribe(result => {
      this.getHomes();
      this.newHome = newHome();
    });
  }

  ngOnInit() {
    this.getHomes();
  }
}
