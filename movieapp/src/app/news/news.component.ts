import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../core/data/newsdata.service';
import { HeadLine } from '../shared/models/headline.model';
import { ActivatedRoute } from "@angular/router";
import { HttpheadlineError } from '../shared/models/httpheadlineerror';
import { NewsResponse } from '../shared/models/news-response.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  headLines: HeadLine[];

  constructor(
    private newsDataService: NewsdataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.newsDataService.getTopHeadlines()
    //   .subscribe(
    //     (data: HeadLine[]) => {
    //       this.headLines = data;
    //     }
    //   );

    let resolvedData: NewsResponse | HttpheadlineError = this.route.snapshot.data['resolvedHeadlines'];

    if (resolvedData instanceof HttpheadlineError) {
      console.log('Error');
    }
    else {
      this.headLines = <HeadLine[]>resolvedData.articles;
      console.log(this.headLines);
    }

  }

}
