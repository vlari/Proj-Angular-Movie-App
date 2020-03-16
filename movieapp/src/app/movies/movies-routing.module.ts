import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies.component';
import { MoviesResolverService } from '../core/data/resolvers/movies-resolver.service';
import { SingleMovieResolver } from '../core/data/resolvers/single-movie-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: 'list',
        component: MovielistComponent,
        resolve: {
          resolvedMovies: MoviesResolverService
        }
      },
      {
        path: ':id',
        component: MoviedetailComponent,
        resolve: {
          resolvedMovie: SingleMovieResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
