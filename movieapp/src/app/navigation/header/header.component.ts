import { Component, OnInit, OnDestroy } from "@angular/core";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { NbSidebarService, NbMediaBreakpointsService, NbThemeService } from "@nebular/theme";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  userMenu = [{ title: "Profile" }, { title: "Log out" }];
  userPictureOnly: boolean = false;
  user: any = {
    name: "John",
    picture: "https://via.placeholder.com/50/4479e7/ffffff?Text=IMG"
  };
  private destroy$: Subject<void> = new Subject<void>();
  protected layoutSize$ = new Subject();

  constructor(
    private sidebarService: NbSidebarService,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
    private router: Router
  ) {}

  ngOnInit() {
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutSize$.next();

    return false;
  }

  navigateHome() {
    this.router.navigate(["/navigation/dashboard"]);
    return false;
  }
}
