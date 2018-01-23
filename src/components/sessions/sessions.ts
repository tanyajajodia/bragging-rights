import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';
import { Bragger } from '../home/home';

@Component({
    selector: 'sessions-page',
    templateUrl: 'sessions.html',
    styleUrls: [ 'sessions.css' ]
})

export class Sessions {

    session: any = [];
    braggers: Array<Bragger> = [];

    constructor( public braggerService: BraggerService, private router: Router ) {
        this.braggers = this.braggerService.getSortedByNameBraggerArray();
    }

    isSameSession() {

    }

    goToSession() {

    }

}
