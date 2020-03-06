import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { MoviedetailComponent } from './moviedetail.component';


const routes: Routes = [
  {
    path: '',
    component: MovielistComponent,
    children: [
      {
        path: 'detail',
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
