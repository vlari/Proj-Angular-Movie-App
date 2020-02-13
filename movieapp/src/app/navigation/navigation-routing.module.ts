import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '**', component: PageNotFoundComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
