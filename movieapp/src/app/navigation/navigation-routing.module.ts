import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { NewsComponent } from '../news/news.component';
import { HeadlineResolverService } from '../core/data/resolvers/headline-resolver.service';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  children: [
    { path: 'news', component: NewsComponent, resolve: {resolvedHeadlines: HeadlineResolverService} },
    { path: '', pathMatch: 'full', redirectTo: 'news' },
    { path: '**', component: PageNotFoundComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
