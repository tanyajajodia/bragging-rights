import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
    selector: 'menu',
    templateUrl: 'menu.html',
    styleUrls: [ 'menu.css' ]
})

export class Menu {
    constructor( private router: Router) {}

    // navigate to home page
    goHome() {
        this.router.navigateByUrl('../home');
    }

    // navigate to bragger input page
    goToInput() {
        this.router.navigateByUrl('../become-a-bragger');
    }
}
