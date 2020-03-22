import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpMoviesError } from 'src/app/shared/models/http-movies-error.model';
import { MoviesResponse } from 'src/app/shared/models/movies-response.model';
import { catchError, filter } from 'rxjs/operators';
import { Moviefilter } from 'src/app/shared/models/moviefilter';
import { MovieDetailResponse } from 'src/app/shared/models/movie-detail-response.model';
import { GenreOptions } from 'src/app/shared/models/genre-options.enum';

const TOTAL_PAGES = 9;

@Injectable({
  providedIn: 'root'
})
export class MoviesdataService {
  baseUri: string = 'https://yts.mx/api/v2';
  headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });
  movieFilters: string = '';

  constructor(private http: HttpClient) { }

  // Get upcoming movies
  getUpcomingMovies(): Observable<MoviesResponse | HttpMoviesError> {
    return this.http.get<MoviesResponse>(`${this.baseUri}/list_upcoming.json`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  // Get movie list
  getMovies(pageSize: number = 9, page: number = 1): Observable<MoviesResponse | HttpMoviesError> {
    let lengthOption = this.getLengthOptions(pageSize, page);
    let filters = this.getMovieFilters();
    console.log(filters);
    if (!filters) {
      filters = '';  
    } 

    let movieList = this.http.get<MoviesResponse>(`${this.baseUri}/list_movies.json?${lengthOption}${filters}`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
    this.movieFilters = '';

    return movieList;
  }

  // Get Movie by Id
  getMovieById(id: string): Observable<MovieDetailResponse | HttpMoviesError> {
    return this.http.get<MoviesResponse>(`${this.baseUri}/movie_details.json?movie_id=${id}&with_cast=true`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  getMovieGenres(){
    return GenreOptions;
  }

  addFilters(movieFilters: Moviefilter): void {
    let filterValue;

    for (const filter in movieFilters) {
      filterValue = movieFilters[`${filter}`];
      if (filterValue) {
        this.movieFilters += `&${filter}=${filterValue}`;
      }
    }

    // this.movieFilters = `&query_term=${movieFilters.query_term}&genre=${movieFilters.genre}&order_by=${movieFilters.order_by}&sort_by=${movieFilters.sort_by}`;
  }

  getMovieFilters(): string {
    return this.movieFilters;
  }

  private handleHttpError(error: HttpErrorResponse): Observable<MoviesResponse>{
    let movieError = new HttpMoviesError();
    movieError.code = error.status;
    movieError.status = error.statusText;
    movieError.message = error.message;
    return throwError(movieError);
  }  

  private getLengthOptions(pageSize: number, page: number) {
    return `limit=${pageSize}&page=${ page++}`;
  }
}
