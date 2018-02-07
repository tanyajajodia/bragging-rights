import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'menu',
    templateUrl: 'menu.html',
    styleUrls: [ 'menu.css' ]
})

export class Menu {

    constructor( private router: Router ) {}

    // navigate to home page
    goHome() {
        this.router.navigateByUrl('home');
    }

    // navigate to sessions page
    goToSessions() {
        this.router.navigateByUrl('sessions');
    }

    // navigate to braggers page
    goToBraggers() {
        this.router.navigateByUrl('braggers');
    }

    // navigate to become a bragger page
    goToBecome() {
        this.router.navigateByUrl('become-a-bragger');
    }

    // navigate to suggest a bragger page
    goToSuggest() {
        // this.router.navigateByUrl('suggest-a-bragger');
    }

    isActive( id: string ) {
        document.getElementById(id).classList.toggle('active');
    }
}
