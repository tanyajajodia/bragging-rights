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


    // convert json data to Bragger data
    constructor( public braggerService: BraggerService, private router: Router ) {
        this.braggers = this.braggerData.braggers;
    }

    // set bragger data in service for use in braggers and sessions pages
    set data( value: any ) {
        this.braggerService.braggerServiceData = value;
    }

    // navigate to braggers page
    goToBraggers( braggers ) {
        this.braggerService.braggerServiceData = braggers;
        this.router.navigateByUrl('../braggers');
    }

    // navigate to sessions page
    goToSessions() {
        this.router.navigateByUrl('../sessions');
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

