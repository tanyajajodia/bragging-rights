import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';


@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: [ 'home.css' ]
})

export class Home {

    constructor( private router: Router ) {}

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
    sessionDate: Date;
}

