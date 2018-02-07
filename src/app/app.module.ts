import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { Home } from './../components/home/home';
import { Timeline } from './../components/timeline/timeline';
import { Title } from './../components/title/title';
import { Menu } from './../components/menu/menu';
import { Braggers } from './../components/braggers/braggers';
import { BraggerInput } from './../components/input/bragger-input';
import { Sessions } from './../components/sessions/sessions';
import { BecomeBragger } from './../components/become-a-bragger/become-a-bragger';
import { RouterModule, Routes } from '@angular/router';
import { BraggerService } from './../services/bragger.service';


// sets the routes within the app
const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'braggers/timeline', component: Timeline },
  { path: 'braggers', component: Braggers },
  { path: 'become-a-bragger', component: BecomeBragger },
  { path: 'sessions', component: Sessions }
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Timeline,
    Title,
    Menu,
    Braggers,
    BraggerInput,
    Sessions,
    BecomeBragger
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
