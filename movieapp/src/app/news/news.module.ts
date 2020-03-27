import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { NbCardModule, NbButtonModule, NbLayoutModule, NbInputModule, NbIconModule, NbListModule, NbSpinnerModule } from '@nebular/theme';
import { NewspostComponent } from './newspost/newspost.component';
import { HeadlinepostComponent } from './headlinepost/headlinepost.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [NewsComponent, NewspostComponent, HeadlinepostComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbListModule,
    NbSpinnerModule,
    FormsModule
  ]
})
export class NewsModule { }
