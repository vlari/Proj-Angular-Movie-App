import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpMoviesError } from 'src/app/shared/models/http-movies-error.model';
import { MoviesResponse } from 'src/app/shared/models/movie-response.model';
import { catchError, filter } from 'rxjs/operators';
import { Moviefilter } from 'src/app/shared/models/moviefilter';

const TOTAL_PAGES = 9;

@Injectable({
  providedIn: 'root'
})
export class MoviesdataService {
  baseUri: string = 'https://yts.mx/api/v2';
  headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });
  movieFilters: string;

  constructor(private http: HttpClient) { }

  // Get upcoming movie
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
    if (!filters) {
      filters = '';  
    } 

    return this.http.get<MoviesResponse>(`${this.baseUri}/list_movies.json?${lengthOption}${filters}`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  addFilters(movieFilters: Moviefilter): void {
    this.movieFilters = `&query_term=${movieFilters.query_term}&genre=${movieFilters.genre}&order_by=${movieFilters.order_by}&sort_by=${movieFilters.sort_by}`;
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
