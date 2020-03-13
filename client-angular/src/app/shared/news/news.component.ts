import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from 'src/app/services/news.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];
  newssDataService: NewsService;
  newsDataService: any;

  constructor(private newsService: NewsService) {
    this.newsDataService = this.newsService;
  }

  ngOnInit() {
    this.newsDataService.getNews().subscribe (news => this.news =news);
  }

}
