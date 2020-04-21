import { Component, OnInit } from "@angular/core";
import { Movie } from "../shared/models/movie.model";
import { MoviesdataService } from "../core/data/moviesdata.service";
import { ActivatedRoute } from "@angular/router";
import { MoviesResponse } from "../shared/models/movies-response.model";
import { HttpMoviesError } from "../shared/models/http-movies-error.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GenreOptions } from "../shared/models/genre-options.enum";
import { OrderByOptions } from "../shared/models/order-by-options.enum";
import { SortByOptions } from "../shared/models/sort-by-options.enum";
import { Moviefilter } from "../shared/models/moviefilter";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.scss"],
})
export class MovielistComponent implements OnInit {
  upComingMovies: Movie[];
  movies: Movie[];
  pageSize: number = 9;
  pageToLoad: number = 1;
  loading: boolean = false;
  filterText: string;
  blockNext: boolean = false;
  blockPrevious: boolean = true;
  movieForm: FormGroup;
  genreList: string[];
  orderByList: string[];
  sortByList: string[];

  constructor(
    private moviesDataService: MoviesdataService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let resolvedMovies: MoviesResponse | HttpMoviesError = this.route.snapshot
      .data["resolvedMovies"];

    if (resolvedMovies instanceof HttpMoviesError) {
      console.log("Error");
    } else {
      this.movies = resolvedMovies.data.movies;
    }

    this.movieForm = this.fb.group({
      filterData: this.fb.group({
        filterText: ["", [Validators.required]],
        genreName: [""],
        orderBy: [""],
        sortBy: [""],
      }),
    });

    this.genreList = GenreOptions.map((o) => o.name);
    this.orderByList = Object.keys(OrderByOptions);
    this.sortByList = Object.keys(SortByOptions);
  }

  loadNext() {
    this.pageToLoad++;
    this.onLoadMovies();
  }

  loadPrevious() {
    this.pageToLoad--;
    this.onLoadMovies();
  }

  onLoadMovies() {
    if (this.loading) {
      return;
    }
    this.loading = true;

    this.moviesDataService
      .getMovies(this.pageSize, this.pageToLoad)
      .subscribe((news: MoviesResponse) => {
        this.movies.length = 0;
        this.movies.push(...news.data.movies);
        this.loading = false;

        if (news.data.movie_count === this.pageToLoad) {
          this.blockNext = true;
        } else if (this.pageToLoad <= 1) {
          this.blockPrevious = true;
        } else {
          this.blockNext = false;
          this.blockPrevious = false;
        }
      });
  }

  filterMovies() {
    if (this.movieForm.valid) {
      let movieFilters = new Moviefilter(
        this.movieForm.get("filterData.filterText").value,
        this.movieForm.get("filterData.genreName").value,
        this.movieForm.get("filterData.orderBy").value,
        this.movieForm.get("filterData.sortBy").value
      );

      this.moviesDataService.addFilters(movieFilters);
      this.resetSearch();
      this.pageToLoad = 1;
      this.onLoadMovies();
    }
  }

  resetSearch() {
    this.blockNext = false;
    this.blockPrevious = true;
  }
}
