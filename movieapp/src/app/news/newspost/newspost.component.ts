import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-newspost',
  templateUrl: './newspost.component.html',
  styleUrls: ['./newspost.component.scss']
})
export class NewspostComponent implements OnInit {
  @Input() post: News;
  isImageLoading: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  goNewsLink(url: string): void {
    window.open(url, '_blank');
  }
}
