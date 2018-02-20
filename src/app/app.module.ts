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
import { Join } from './../components/join-the-brag/join-the-brag';
import { RouterModule, Routes } from '@angular/router';
import { BraggerService } from './../services/bragger.service';


// sets the routes within the app
const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'braggers/timeline', component: Timeline },
  { path: 'braggers', component: Braggers },
  { path: 'join-the-brag', component: Join },
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
    Join
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
