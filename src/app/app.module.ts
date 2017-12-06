import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { Timeline } from './../timeline/timeline';
import { Home } from './../home/home';
import { RouterModule, Routes } from '@angular/router';
import { BraggerService } from './../services/bragger.service';

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
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [ BraggerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
