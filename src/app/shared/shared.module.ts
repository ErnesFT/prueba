import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutPageComponent } from './components/about-page/about-page.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent,
    HomepageComponent
  ]
})
export class SharedModule { }
