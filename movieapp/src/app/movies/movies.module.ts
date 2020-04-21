import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MovielistComponent } from "./movielist.component";
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbInputModule,
  NbIconModule,
  NbListModule,
  NbSelectModule,
  NbSpinnerModule,
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MoviecardComponent } from "./moviecard/moviecard.component";
import { MoviedetailComponent } from "./moviedetail/moviedetail.component";
import { MoviesComponent } from "./movies.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    MovielistComponent,
    MoviecardComponent,
    MoviedetailComponent,
    MoviesComponent,
  ],
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
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class MoviesModule {}
