import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';


@Component({
    selector: 'join-the-brag',
    templateUrl: 'join-the-brag.html',
    styleUrls: [ 'join-the-brag.css' ]
})

export class Join implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;

    constructor() {}

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('join');
    }

    becomeABragger() {
        document.getElementById('become').classList.add('active');
        document.getElementById('suggest').classList.remove('active');
    }

    suggestABragger() {
        document.getElementById('suggest').classList.add('active');
        document.getElementById('become').classList.remove('active');
    }

    onFocus(event) {
        event.target.parentNode.classList.add('mdc-text-field--focused');
        event.target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
        event.target.parentNode.classList.add('mdc-text-field-focus');
    }

    onBlur(event) {
        event.target.parentNode.classList.remove('mdc-text-field--focused');
        event.target.parentNode.classList.remove('mdc-text-field-focus');
        if (event.target.value === '') {
            event.target.nextElementSibling.classList.remove('mdc-text-field__label--float-above');
        }
    }

    submit() {}

}
