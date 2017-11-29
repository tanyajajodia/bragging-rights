import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.css']
})

export class Timeline {

    name: string;
    labels: string[] = ['a', 'b', 'c'];
    data: number[] = [5, 3, -5];
    type: string = 'line';

    constructor(private router: Router) {}

    goHome() {
        this.router.navigateByUrl('../home');
    }
}
