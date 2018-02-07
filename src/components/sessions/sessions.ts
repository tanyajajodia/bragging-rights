import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';
import { Bragger } from '../home/home';
import { Menu } from './../menu/menu';


@Component({
    selector: 'sessions-page',
    templateUrl: 'sessions.html',
    styleUrls: [ 'sessions.css' ]
})

export class Sessions implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;
    session: any = [];
    braggers: Array<Bragger> = [];

    constructor( public braggerService: BraggerService, private router: Router ) {
        this.braggers = this.braggerService.getSortedByNameBraggerArray();
    }

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('sessions');
    }

    isSameSession() {

    }

    goToSession() {

    }

}
