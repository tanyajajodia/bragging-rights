import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class Home {

    public braggers: Array<Bragger> = [];

    shae: Bragger = { name: 'Shae' };
    amy: Bragger = { name: 'Amy' };
    paula: Bragger = { name: 'Paula' };

    constructor(private router: Router) {
        this.braggers.push(this.shae);
        this.braggers.push(this.amy);
        this.braggers.push(this.paula);
    }

    goToTimeline(clickEvent) {
        let bragger = clickEvent.target.innerText;
        // this.router.navigateByUrl('../timeline');
    }
}

interface Bragger {
    name: string;
    title?: Object;
}


