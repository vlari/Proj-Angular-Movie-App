import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { HeadLine } from 'src/app/shared/models/headline.model';
import { HttpheadlineError } from 'src/app/shared/models/httpheadlineerror';
import { NewsdataService } from '../newsdata.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { NewsResponse } from 'src/app/shared/models/news-response.model';

@Injectable({
    providedIn: 'root'
})
export class HeadlineResolverService implements Resolve<NewsResponse | HttpheadlineError> {

    constructor(private dataService: NewsdataService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<NewsResponse | HttpheadlineError> {
        return this.dataService.getTopHeadlines()
            .pipe(
                catchError(err => of(err))
            );
    }

}