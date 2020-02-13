import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: 'navigation',
    loadChildren: () =>
      import('./navigation/navigation.module')
      .then(m => m.NavigationModule)
  },
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
