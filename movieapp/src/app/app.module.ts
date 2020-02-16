import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NbThemeModule, NbSidebarModule, NbMenuModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({
      name: 'cosmic'
    }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
