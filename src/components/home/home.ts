import { element } from 'protractor';
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
        this.braggers = this.braggerData.braggers;
    }

    // set Bragger data in service for use in Timeline
    set data( value: any ) {
        this.braggerService.braggerServiceData = value;
    }

    // sets timeline for specified bragger and navigates to the timeline page
    goToTimeline( bragger ) {
        this.braggerService.braggerServiceData = bragger;
        this.router.navigateByUrl('../timeline');
    }
}

// defines a Bragger object
export interface Bragger {
    name: string;
    jobTitle: string;
    bu: string;
    careerLength: number;
    brag: string[];
    bragValue: number[];
    imgName: string;
}
