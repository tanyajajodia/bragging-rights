import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';
import { Bragger } from '../home/home';


@Component({
    selector: 'braggers',
    templateUrl: 'braggers.html',
    styleUrls: [ 'braggers.css' ]
})

export class Braggers {

    braggers: Array<Bragger> = [];

    constructor ( public braggerService: BraggerService, private router: Router ) {
        this.braggers = this.braggerService.braggerServiceData;
    }

    // get bragger data from service to list all braggers
    get data() {
        return this.braggerService.braggerServiceData;
    }

    // set bragger data in service for use in timeline
    set data( value: any ) {
        this.braggerService.braggerServiceData = value;
    }

    // set timeline for specified bragger and navigate to the timeline page
    goToTimeline( bragger ) {
        this.braggerService.braggerServiceData = bragger;
        this.router.navigateByUrl('../timeline');
    }
}
