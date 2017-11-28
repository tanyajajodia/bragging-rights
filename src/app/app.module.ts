import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Timeline } from './../timeline/timeline';
import { Home } from './../home/home';
import { RouterModule, Routes } from '@angular/router';

// sets the routes within the app
const appRoutes: Routes = [
  { path: '../home', component: Home },
  { path: '../timeline', component: Timeline }
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Timeline
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
