import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.css']
})

export class Timeline {

    name: string;
    labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    data: number[] = [350, 450, 100];
    type: string = 'doughnut';

    constructor(private router: Router) {}

    goHome() {
        this.router.navigateByUrl('../home');
    }
}
