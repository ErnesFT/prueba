import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./shared/components/homepage/homepage.component";
import { AboutPageComponent } from "./shared/components/about-page/about-page.component";

const routes:Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule {
}
