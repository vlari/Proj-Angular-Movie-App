import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MoviesdataService } from '../core/data/moviesdata.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesResponse } from '../shared/models/movie-response.model';
import { HttpMoviesError } from '../shared/models/http-movies-error.model';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  upComingMovies: Movie[];
  movies: Movie[];
  pageSize: number = 8;
  pageToLoadNext: number = 1;
  loading: boolean = false;
  filterText: string;
  isFiltered: boolean = true;

  constructor(
    private moviesDataService: MoviesdataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let resolvedMovies: MoviesResponse | HttpMoviesError = this.route.snapshot
      .data["resolvedMovies"];
    // let resolvedUpcoming: MoviesResponse | HttpMoviesError = this.route.snapshot
    // .data["resolvedUpcomingMovies"];

    if (resolvedMovies instanceof HttpMoviesError) {
      console.log('Error');
    } else {
      // this.upComingMovies = <Movie[]>resolvedUpcoming.data;
      this.movies = resolvedMovies.data.movies;
    }
  }

}
