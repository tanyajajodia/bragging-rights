import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';


@Component({
    selector: 'become-a-bragger',
    templateUrl: 'become-a-bragger.html',
    styleUrls: [ 'become-a-bragger.css' ]
})

export class BecomeBragger implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;

    constructor() {}

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('become');
    }

}
