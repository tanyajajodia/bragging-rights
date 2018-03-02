import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';


@Component({
    selector: 'join-the-brag',
    templateUrl: 'join-the-brag.html',
    styleUrls: [ 'join-the-brag.css' ]
})

export class Join implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;
    emailRegex = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    becomeBtnActive = true;
    suggestBtnActive = false;
    formDisabled = true;

    constructor() {}

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('join');
    }

    becomeABragger() {
        this.becomeBtnActive = true;
        this.formDisabled = true;
        this.suggestBtnActive = false;
    }

    suggestABragger() {
        this.suggestBtnActive = true;
        this.becomeBtnActive = false;
        this.formDisabled = false;
    }

    onFocus(event) {
        event.target.parentNode.classList.add('mdc-text-field--focused');
        event.target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
        event.target.parentNode.classList.add('mdc-text-field-focus');
    }

    onBlur(event) {
        event.target.parentNode.classList.remove('mdc-text-field--focused');
        event.target.parentNode.classList.remove('mdc-text-field-focus');
    }

    // checkValidity(event) {
    //     if (!event.target.checkValidity()) {
    //         // invalid
    //         event.target.parentNode.classList.add('mdc-text-field--invalid');
    //         if (event.target.value === '') {
    //             event.target.nextElementSibling.classList.remove('mdc-text-field__label--float-above');
    //         }
    //     } else {
    //         // valid
    //         event.target.parentNode.classList.remove('mdc-text-field--invalid');
    //     }
    // }

    submit() {}

}
