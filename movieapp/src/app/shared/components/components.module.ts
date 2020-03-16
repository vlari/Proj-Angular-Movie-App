import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardbasicComponent } from './cardbasic/cardbasic.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [CardbasicComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule
  ],
  exports: [
    CardbasicComponent
  ]
})
export class ComponentsModule { }
