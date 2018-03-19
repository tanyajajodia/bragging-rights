import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  // @param router: initializes Angular's Router
  // for navigation between components
  constructor(private router: Router) {
    // upon starting app, land on home view
    this.router.navigateByUrl('braggers');
  }
}


