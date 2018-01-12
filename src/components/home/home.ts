import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';


@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: [ 'home.css' ]
})

export class Home {

    // variables
    braggerData: any = require('./../../data/braggersData.json');

    // convert json data to Bragger data
    constructor( public braggerService: BraggerService, private router: Router ) {
        this.braggerService.braggerServiceData = this.braggerData.braggers;
    }

    // set bragger data in service
    set data( value: any ) {
        this.braggerService.braggerServiceData = value;
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

