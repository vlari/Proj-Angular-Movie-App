import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovielistComponent } from './movielist.component';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbInputModule, NbIconModule, NbListModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { MoviecardComponent } from './moviecard/moviecard.component';


@NgModule({
  declarations: [MovielistComponent, MoviecardComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbListModule,
    FormsModule
  ]
})
export class MoviesModule { }
