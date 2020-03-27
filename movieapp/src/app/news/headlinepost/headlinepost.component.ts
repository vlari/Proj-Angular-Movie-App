import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-headlinepost',
  templateUrl: './headlinepost.component.html',
  styleUrls: ['./headlinepost.component.scss']
})
export class HeadlinepostComponent implements OnInit {
  @Input() headLinePost: News;
  isImageLoading: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  goHeadlineLink(url: string): void {
    window.open(url, '_blank');
  }
}
