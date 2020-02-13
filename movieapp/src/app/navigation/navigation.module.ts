import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbActionsModule, NbSearchModule, NbUserModule, NbIconModule, NbContextMenuModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NavigationComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbIconModule,
    NbContextMenuModule,
    SharedModule
  ]
})
export class NavigationModule { }
