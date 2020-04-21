import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpNewsError } from 'src/app/shared/models/httpnewserror';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesdataService } from '../moviesdata.service';
import { MovieDetailResponse } from 'src/app/shared/models/movie-detail-response.model';

@Injectable({
    providedIn: 'root'
})
export class SingleMovieResolver implements Resolve<MovieDetailResponse | HttpNewsError> {

    constructor(private dataService: MoviesdataService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<MovieDetailResponse | HttpNewsError> {
        return this.dataService.getMovieById(route.paramMap.get('id'))
            .pipe(
                catchError(err => of(err))
            );
    }

}