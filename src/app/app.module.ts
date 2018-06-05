// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Other
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Components
import { Title } from './../components/title/title';
import { Menu } from './../components/menu/menu';
import { BraggersComponent } from './../components/braggers/braggers';
import { TimelineComponent } from './../components/timeline/timeline';
import { AboutComponent } from './../components/about/about';

// Services
import { BraggerService } from './../services/bragger.service';

// Material
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// sets the routes within the app
const appRoutes: Routes = [
  { path: 'braggers', component: BraggersComponent },
  { path: 'braggers/timeline', component: TimelineComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    Title,
    Menu,
    BraggersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ BraggerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
