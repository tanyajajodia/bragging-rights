import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from './../timeline/timeline';
import { BraggerService } from './../../services/bragger.service';


@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: [ 'home.css' ]
})

export class Home {

    // variables
    braggerData: any = require('./../../data/braggersData.json');
    braggers: Array<Bragger> = [];


    // constructor dynamically labels the buttons on the home page
    // by adding json data to Bragger array
    constructor( public braggerService: BraggerService, private router: Router ) {
        for ( let bragger of this.braggerData.braggers) {
            this.braggers.push(bragger);
        }
    }

    // set Bragger data in service for use in Timeline
    set data( value: any ) {
        this.braggerService.braggerServiceData = value;
    }

    // sets timeline for specified bragger and navigates to the timeline page
    goToTimeline( clickEvent ) {
        this.braggerService.braggerServiceData = this.braggers.find
            (braggerObj => braggerObj.name === clickEvent.target.innerText);
        this.router.navigateByUrl('../timeline');
    }
}

// defines a Bragger object
export interface Bragger {
    name: string;
    jobTitle: string;
    careerLength: number;
    brag: string[];
    bragValue: number[];
}

