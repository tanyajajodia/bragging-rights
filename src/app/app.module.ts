import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { Home } from './../components/home/home';
import { Timeline } from './../components/timeline/timeline';
import { Title } from './../components/title/title';
import { Braggers } from './../components/braggers/braggers';
import { BraggerInput } from './../components/input/bragger-input';
import { RouterModule, Routes } from '@angular/router';
import { BraggerService } from './../services/bragger.service';


// sets the routes within the app
const appRoutes: Routes = [
  { path: '../home', component: Home },
  { path: '../timeline', component: Timeline },
  { path: '../braggers', component: Braggers},
  { path: '../braggers/become-a-bragger', component: BraggerInput}
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Timeline,
    Title,
    Braggers,
    BraggerInput
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
