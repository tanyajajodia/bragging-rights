import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.css']
})

export class Timeline {

    constructor(private router: Router) {}

    goHome() {
        this.router.navigateByUrl('../home');
    }
}


