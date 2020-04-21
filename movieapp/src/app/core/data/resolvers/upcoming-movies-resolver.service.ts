import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpNewsError } from 'src/app/shared/models/httpnewserror';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesdataService } from '../moviesdata.service';
import { MoviesResponse } from 'src/app/shared/models/movies-response.model';

@Injectable({
    providedIn: 'root'
})
export class UpcomingMoviesResolverService implements Resolve<MoviesResponse | HttpNewsError> {

    constructor(private dataService: MoviesdataService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<MoviesResponse | HttpNewsError> {
        return this.dataService.getUpcomingMovies()
            .pipe(
                catchError(err => of(err))
            );
    }

}