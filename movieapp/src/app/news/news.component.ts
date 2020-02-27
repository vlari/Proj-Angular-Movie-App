import { Component, OnInit } from "@angular/core";
import { NewsdataService } from "../core/data/newsdata.service";
import { News } from "../shared/models/news.model";
import { ActivatedRoute } from "@angular/router";
import { HttpNewsError } from "../shared/models/httpnewserror";
import { NewsResponse } from "../shared/models/news-response.model";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  headLines: News[];
  news: News[];
  pageSize: number = 8;
  pageToLoadNext: number = 1;
  loading: boolean = false;
  filterText: string;
  isFiltered: boolean = true;

  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let resolvedNews: NewsResponse | HttpNewsError = this.route.snapshot
      .data["resolvedNews"];
    let resolvedHeadlines: NewsResponse | HttpNewsError = this.route.snapshot
    .data["resolvedHeadlines"];

    if (resolvedNews instanceof HttpNewsError || resolvedHeadlines instanceof HttpNewsError) {
    } else {
      this.news = <News[]>resolvedNews.articles;
      this.headLines = <News[]>resolvedHeadlines.articles;
    }
  }

  filterNews(){
    this.newsDataService.getFilteredNews(this.filterText)
      .subscribe(
        (data: NewsResponse) => {
          this.news.length = 0;
          this.news.push(...data.articles);
          this.isFiltered = false;
        }
      );
  }

  onFilterChange(e: any){
    if (!this.filterText.length) {
      this.isFiltered = true;
    }
  }

  loadNext() {
    if (this.loading) { return }

    this.loading = true;
      this.newsDataService.getNews(this.pageSize, this.pageToLoadNext)
        .subscribe( (news: NewsResponse) => {
          this.news.push(...news.articles);
          this.loading = false;
          this.pageToLoadNext++;
        });
  }

  
}
