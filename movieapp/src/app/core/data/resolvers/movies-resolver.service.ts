import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpNewsError } from 'src/app/shared/models/httpnewserror';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesdataService } from '../moviesdata.service';
import { MoviesResponse } from 'src/app/shared/models/movie-response.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesResolverService implements Resolve<MoviesResponse | HttpNewsError> {

    constructor(private dataService: MoviesdataService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<MoviesResponse | HttpNewsError> {
        return this.dataService.getMovies()
            .pipe(
                catchError(err => of(err))
            );
    }

}