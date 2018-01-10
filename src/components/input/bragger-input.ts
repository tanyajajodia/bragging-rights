import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'bragger-input',
    templateUrl: 'bragger-input.html',
    styleUrls: [ 'bragger-input.css' ]
})

export class BraggerInput {

    constructor( private router: Router ) {}

}
