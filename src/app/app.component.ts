import { BraggerService } from './../services/bragger.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  // @param router: initializes Angular's Router
  // for navigation between components
  constructor( private router: Router, public braggerService: BraggerService ) {
    // preload images
    braggerService.preloadImages();
    // upon starting app, land on home view
    this.router.navigateByUrl('about');
  }
}


