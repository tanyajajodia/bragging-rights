import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'menu',
    templateUrl: 'menu.html',
    styleUrls: [ 'menu.css' ]
})

export class Menu {

    constructor( private router: Router ) {}

    // navigate to braggers page
    goToBraggers() {
        this.router.navigateByUrl('braggers');
    }

    // navigate to become a bragger page
    goToJoin() {
        this.router.navigateByUrl('join-the-brag');
    }

    isActive( id: string ) {
        document.getElementById(id).classList.toggle('active');
    }
}
