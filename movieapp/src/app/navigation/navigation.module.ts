import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigationRoutingModule } from "./navigation-routing.module";
import { NavigationComponent } from "./navigation.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {
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
  NbCardModule,
} from "@nebular/theme";
import { SharedModule } from "../shared/shared.module";
import { NewsModule } from "../news/news.module";
import { MoviesModule } from "../movies/movies.module";
import { ResourcesModule } from "../resources/resources.module";

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
    NbCardModule,
    NbContextMenuModule,
    SharedModule,
    NewsModule,
    MoviesModule,
    ResourcesModule,
  ],
})
export class NavigationModule {}
