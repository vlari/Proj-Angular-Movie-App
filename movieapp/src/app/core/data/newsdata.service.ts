import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpNewsError } from 'src/app/shared/models/httpnewserror';
import { NewsResponse } from 'src/app/shared/models/news-response.model';

const TOTAL_PAGES = 7;

@Injectable({
  providedIn: 'root'
})
export class NewsdataService {
  newsApiKey: string;
  baseUri: string = 'https://newsapi.org/v2';
  headers: HttpHeaders = new HttpHeaders({
    'X-Api-Key': environment.newsApiKey,
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) { 
  }

  // Get latest headlines.
  getTopHeadlines(): Observable<NewsResponse | HttpNewsError> {
    return this.http.get<NewsResponse>(`${this.baseUri}/top-headlines?category=entertainment&country=us&pageSize=3`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  // Get filtered news articles.
  getFilteredNews(filterText: string): Observable<NewsResponse | HttpNewsError> {
    let pageSize = 10;
    let page =1;
    let lengthOption = this.getLengthOptions(pageSize, page);
    return this.http.get<NewsResponse>(`${this.baseUri}/everything?q=movie+${filterText}&language=en&sortBy=relevancy${lengthOption}`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  // Get News
  getNews(pageSize: number = 8, page: number = 1): Observable<NewsResponse | HttpNewsError> {
    let lengthOption = this.getLengthOptions(pageSize, page);

    return this.http.get<NewsResponse>(`${this.baseUri}/everything?q=movie&language=en&sortBy=relevancy${lengthOption}`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<NewsResponse>{
    let headLineError = new HttpNewsError();
    headLineError.code = error.status;
    headLineError.status = error.statusText;
    headLineError.message = error.message;
    return throwError(headLineError);
  }  

  private getLengthOptions(pageSize: number, page: number) {
    const newPage = ((page - 1) % TOTAL_PAGES) * pageSize || 1;
    return `&pageSize=${pageSize}&page=${ newPage}`;
  }

}
