import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { MoviesdataService } from '../core/data/moviesdata.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesResponse } from '../shared/models/movie-response.model';
import { HttpMoviesError } from '../shared/models/http-movies-error.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenreOptions } from '../shared/models/genre-options.enum';
import { OrderByOptions } from '../shared/models/order-by-options.enum';
import { SortByOptions } from '../shared/models/sort-by-options.enum';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  upComingMovies: Movie[];
  movies: Movie[];
  pageSize: number = 9;
  pageToLoad: number = 1;
  loading: boolean = false;
  filterText: string;
  isFiltered: boolean = true;
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
  ) { }

  ngOnInit() {
    let resolvedMovies: MoviesResponse | HttpMoviesError = this.route.snapshot
      .data["resolvedMovies"];

    if (resolvedMovies instanceof HttpMoviesError) {
      console.log('Error');
    } else {
      this.movies = resolvedMovies.data.movies;
    }

    this.movieForm = this.fb.group({
      filterData: this.fb.group({
        movieFilter: ['', [Validators.required]],
        genreName: [''],
        orderBy: [''],
        sortBy: ['']
      })
    });

    this.genreList = Object.keys(GenreOptions);
    this.orderByList = Object.keys(OrderByOptions);
    this.sortByList = Object.keys(SortByOptions);
    
  }

  loadNext() {
    this.pageToLoad++;
    this.onLoadMovies();
  }

  loadPrevious(){
    this.pageToLoad--;
    this.onLoadMovies();
  }

  onLoadMovies(){
    if (this.loading) { return }
      this.loading = true;

      this.moviesDataService
        .getMovies(this.pageSize, this.pageToLoad)
        .subscribe((news: MoviesResponse) => {
          this.movies.length = 0;
          this.movies.push(...news.data.movies);
          this.loading = false;
          
          if (news.data.movie_count === this.pageToLoad) {
            console.log('block next, free prev');
            this.blockNext = true;
          } else if (this.pageToLoad <= 1) {
            console.log('block prev, free next');
            this.blockPrevious = true;
          }
          else {
            console.log('all free');
            this.blockNext = false;
            this.blockPrevious = false;
          }
        });
  }

  filterMovies(){

  }

}
