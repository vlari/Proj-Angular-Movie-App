import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpNewsError } from 'src/app/shared/models/httpnewserror';
import { NewsResponse } from 'src/app/shared/models/news-response.model';

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
    return this.http.get<NewsResponse>(`${this.baseUri}/https://newsapi.org/v2/top-headlines?category=entertainment&country=us`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  // Get filtered news articles.
  getFilteredHeadlines(filterText: string): Observable<NewsResponse | HttpNewsError> {
    return this.http.get<NewsResponse>(`${this.baseUri}/top-headlines?q=${filterText}category=entertainment&country=us`, {
      headers: this.headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  getNews(pageSize: number = 20, page: number = 1): Observable<NewsResponse | HttpNewsError> {
    let lengthOption;
    if(pageSize > 0 && page > 0) {
      lengthOption = `&pageSize=${pageSize}&page=${page}`;
    } 
    else {
      lengthOption = '';
    }

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

}
