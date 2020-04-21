import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpNewsError } from 'src/app/shared/models/httpnewserror';
import { NewsdataService } from '../newsdata.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { NewsResponse } from 'src/app/shared/models/news-response.model';

@Injectable({
    providedIn: 'root'
})
export class NewsResolverService implements Resolve<NewsResponse | HttpNewsError> {

    constructor(private dataService: NewsdataService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<NewsResponse | HttpNewsError> {
        return this.dataService.getNews()
            .pipe(
                catchError(err => of(err))
            );
    }

}