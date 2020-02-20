import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { NbCardModule, NbButtonModule, NbLayoutModule, NbInputModule, NbIconModule, NbListModule } from '@nebular/theme';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbListModule
  ]
})
export class NewsModule { }
