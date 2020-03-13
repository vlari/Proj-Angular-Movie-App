import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { NewsComponent } from '../news/news.component';
import { HeadlineResolverService } from '../core/data/resolvers/headline-resolver.service';
import { NewsResolverService } from '../core/data/resolvers/news-resolver.service';
import { ResourcesComponent } from '../resources/resources/resources.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent,
        resolve: {
          resolvedNews: NewsResolverService,
          resolvedHeadlines: HeadlineResolverService
        }
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('../movies/movies.module').then(m => m.MoviesModule)
      },
      {
        path: 'links',
        component: ResourcesComponent
      },
      { path: '', pathMatch: 'full', redirectTo: 'news' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
