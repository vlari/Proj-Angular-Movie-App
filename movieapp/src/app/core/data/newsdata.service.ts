import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HeadLine } from 'src/app/shared/models/headline.model';
import { HttpheadlineError } from 'src/app/shared/models/httpheadlineerror';
import { NewsResponse } from 'src/app/shared/models/news-response.model';

@Injectable({
  providedIn: 'root'
})
export class NewsdataService {
  newsApiKey: string;
  baseUri: string = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { 
    this.newsApiKey = environment.newsApiKey;
  }

  // Get latest headlines.
  getTopHeadlines(): Observable<NewsResponse | HttpheadlineError> {
    let headers: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'x-api-key': this.newsApiKey
    });

    return this.http.get<NewsResponse>(`${this.baseUri}/top-headlines?category=entertainment&country=us`, {
      headers: headers
    })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  // Get filtered news articles.

  private handleHttpError(error: HttpErrorResponse): Observable<NewsResponse>{
    let headLineError = new HttpheadlineError();
    headLineError.code = error.status;
    headLineError.status = error.statusText;
    headLineError.message = error.message;
    return throwError(headLineError);
  }  

}
