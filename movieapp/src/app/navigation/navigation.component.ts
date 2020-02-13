import { Component, OnInit } from "@angular/core";
import { MENU_ITEMS } from './menu';

@Component({
  selector: "app-navigation",
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>

      <nb-sidebar>
        <nb-menu [items]="menu"></nb-menu>
      </nb-sidebar>

      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent {
  menu = MENU_ITEMS;
}
