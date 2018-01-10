import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'braggers',
    templateUrl: 'braggers.html',
    styleUrls: [ 'braggers.css' ]
})

export class Braggers {

    constructor ( private router: Router ) {}

    goToInput() {
        this.router.navigateByUrl('../braggers/become-a-bragger');
    }
}
