import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources/resources.component';
import { NbCardModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    NbCardModule,
    SharedModule
  ]
})
export class ResourcesModule { }
