import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SharedModule { }
