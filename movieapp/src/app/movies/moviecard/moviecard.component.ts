import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/shared/models/movie.model";

@Component({
  selector: "app-moviecard",
  templateUrl: "./moviecard.component.html",
  styleUrls: ["./moviecard.component.scss"],
})
export class MoviecardComponent implements OnInit {
  @Input() moviePlaceholder: Movie;
  isImageLoading: boolean = true;

  constructor() {}

  ngOnInit() {}

  goHeadlineLink(url: string): void {
    // go to movie detail
  }
}
