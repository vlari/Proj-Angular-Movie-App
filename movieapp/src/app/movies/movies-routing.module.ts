import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies.component';
import { MoviesResolverService } from '../core/data/resolvers/movies-resolver.service';


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
        path: 'details',
        component: MoviedetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
