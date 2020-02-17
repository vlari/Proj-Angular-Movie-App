import { Component, OnInit } from "@angular/core";
import { NewsdataService } from "../core/data/newsdata.service";
import { HeadLine } from "../shared/models/headline.model";
import { ActivatedRoute } from "@angular/router";
import { HttpheadlineError } from "../shared/models/httpheadlineerror";
import { NewsResponse } from "../shared/models/news-response.model";
import { NewsSource } from '../shared/models/news-source.model';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  headLines: HeadLine[];
  mockData: any = [
    {
      source: {
        id: "usa-today",
        name: "USA Today"
      },
      author: "Josef Federman",
      title:
        "Israeli army: Hamas hackers tried to ‘seduce’ soldiers - USA TODAY",
      description:
        "A military spokesman said Hamas used a number of social media platforms to make contact with unsuspecting soldiers.",
      url:
        "https://www.usatoday.com/story/news/world/2020/02/16/israeli-army-hamas-hackers-tried-seduce-soldiers/4778608002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2020/02/16/USAT/b73b8fba-65c4-41f1-b7af-e8542e0c9247-AFP_AFP_1P00K8.JPG?crop=6299,3544,x0,y298&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2020-02-16T11:10:29Z",
      content:
        "JERUSALEM The Israeli military on Sunday said it has thwarted an attempt by the Hamas militant group to hack soldiers phones by posing as young, attractive women on social media, striking up friendships and persuading them into downloading malware.\r\nLt. Col. … [+2980 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Jack Guy, CNN",
      title:
        "Storm Dennis strikes UK sparking flood warnings and evacuations - CNN",
      description:
        "The UK has been battered by gale force winds and heavy rains for the second weekend in a row as a cluster of storms continues to cross the Atlantic.",
      url:
        "https://www.cnn.com/2020/02/16/uk/storm-dennis-sunday-intl-gbr/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/200216102622-storm-dennis-sunday-01-super-tease.jpg",
      publishedAt: "2020-02-16T10:40:00Z",
      content: null
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press"
      },
      author: "Pan Pylas",
      title:
        "Boyfriend of British TV presenter heartbroken by her death - The Associated Press",
      description:
        'LONDON (AP) — The boyfriend of Caroline Flack, the British TV host for the controversial reality show “Love Island,” said Sunday that his “heart is broken" at her death as criticism swelled at her...',
      url: "https://apnews.com/40defa2f6da82cdda85a56831c06f60c",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/cd1db3ae0af349f9b46f331d4d120228/2596.jpeg",
      publishedAt: "2020-02-16T10:22:06Z",
      content:
        "LONDON (AP) The boyfriend of Caroline Flack, the British TV host for the controversial reality show Love Island, said Sunday that his heart is broken at her death as criticism swelled at her treatment by some British media.\r\nFlack, 40, was found dead Saturday… [+2801 chars]"
    }
  ];

  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.newsDataService.getTopHeadlines()
    //   .subscribe(
    //     (data: HeadLine[]) => {
    //       this.headLines = data;
    //     }
    //   );

    let resolvedData: NewsResponse | HttpheadlineError = this.route.snapshot
      .data["resolvedHeadlines"];

    if (resolvedData instanceof HttpheadlineError) {
      console.log("Error");
    } else {
      this.headLines = <HeadLine[]>resolvedData.articles;
      console.log(this.headLines);
    }
  }

  filterHeadlines(filterText: string){
    this.newsDataService.getFilteredHeadlines(filterText)
      .subscribe(
        (data: NewsResponse) => this.headLines = data.articles
      );
  }

  goNewsLink(url: string): void {
    window.open(url, '_blank');
  }
}
