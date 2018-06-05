import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';
import { Menu } from './../menu/menu';


@Component({
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: [ 'home.css' ]
})

export class HomeComponent implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;

    constructor( private router: Router ) {}

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('home');
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
    sessionDate: Date;
}

