import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { Title } from './../components/title/title';
import { Menu } from './../components/menu/menu';
import { BraggersComponent } from './../components/braggers/braggers';
import { TimelineComponent } from './../components/timeline/timeline';
import { JoinComponent } from './../components/join-the-brag/join-the-brag';
import { AboutComponent } from './../components/about/about';
import { RouterModule, Routes } from '@angular/router';
import { BraggerService } from './../services/bragger.service';
import { ReactiveFormsModule } from '@angular/forms';


// sets the routes within the app
const appRoutes: Routes = [
  { path: 'braggers', component: BraggersComponent },
  { path: 'braggers/timeline', component: TimelineComponent },
  { path: 'join-the-brag', component: JoinComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    Title,
    Menu,
    BraggersComponent,
    JoinComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [ BraggerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
