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
        this.braggers = this.braggerService.getSortedByNameBraggerArray();
    }

    // set timeline for specified bragger and navigate to the timeline page
    goToTimeline( bragger ) {
        this.braggerService.braggerServiceData = bragger;
        this.router.navigateByUrl('../timeline');
    }
}
