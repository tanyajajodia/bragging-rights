import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BraggerService } from './../../services/bragger.service';
import { Bragger } from '../home/home';
import { Menu } from '../menu/menu';


@Component({
    selector: 'app-braggers',
    templateUrl: 'braggers.html',
    styleUrls: [ 'braggers.css' ]
})

export class BraggersComponent implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;
    braggers: Array<Bragger> = [];

    constructor ( public braggerService: BraggerService, private router: Router ) {
        this.braggers = this.braggerService.getSortedByNameBraggerArray();
    }

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('braggers');
    }

    // set timeline for specified bragger and navigate to the timeline page
    goToTimeline( bragger ) {
        this.braggerService.braggerServiceData = bragger;
        this.router.navigateByUrl('braggers/timeline');
    }
}
