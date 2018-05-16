import { Router } from '@angular/router';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
    selector: 'app-about',
    templateUrl: 'about.html',
    styleUrls: [ 'about.css' ]
})

export class AboutComponent implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;

    constructor () {}

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('about');
    }
}
