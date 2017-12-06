import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class Home {

    braggerData: any = require('../braggersData.json');
    braggers: Array<Bragger> = [];

    constructor(private router: Router) {
        // add Braggers to the braggers array
        // this is used to dynamically label the buttons on the home page
        for ( let bragger of this.braggerData.braggers) {
            this.braggers.push(bragger);
        }
    }

    // shows timeline data for specified bragger
    goToTimeline(clickEvent) {
        let bragger = this.braggers.find
            (braggerObj => braggerObj.name === clickEvent.target.innerText);
        console.log(bragger);
        this.router.navigateByUrl('../timeline');
    }
}

// defines a Bragger object
interface Bragger {
    name: string;
    jobTitle: string;
    careerLength: number;
    brag: string[];
    bragValue: number[];
}
