import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

   apiKey = '2f0951c860084867844d2440b20cfe14'; // Obtenha de 'newsapi.org'
  apiQuery = 'programação';
  apiItens = 10;
  public apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`;
  newList: any;

  constructor(

    private http: HttpClient

  ) { }

  ngOnInit() {

    this.http.get(this.apiURL).subscribe(
      (data) =>{

        this.newList = data.articles.slice(0, this.apiItens);
        console.log(this.newList);

      }


    );


  }

}
