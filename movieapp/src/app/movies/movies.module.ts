import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovielistComponent } from './movielist.component';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbInputModule, NbIconModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MoviedetailComponent } from './moviedetail.component';


@NgModule({
  declarations: [MovielistComponent, MoviecardComponent, MoviedetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbListModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
