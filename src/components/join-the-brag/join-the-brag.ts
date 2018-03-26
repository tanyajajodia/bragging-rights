import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';


@Component({
    selector: 'join-the-brag',
    templateUrl: 'join-the-brag.html',
    styleUrls: [ 'join-the-brag.css' ]
})

export class Join implements AfterViewInit {

    @ViewChild(Menu) menuComponent: Menu;
    becomeBtnActive = true;
    suggestBtnActive = false;
    formDisabled = true;
    // submitDisabled = true;

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
        const target = event.target;
        const parent = target.parentNode;

        parent.classList.add('mdc-text-field--focused');
        parent.classList.add('mdc-text-field-focus');
        target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
    }

    onBlur(event) {
        const target = event.target;
        const parent = target.parentNode;

        parent.classList.remove('mdc-text-field--focused');
        parent.classList.remove('mdc-text-field-focus');

        if (target.value === '') {
            target.nextElementSibling.classList.remove('mdc-text-field__label--float-above');
        }
    }

    checkValidity(event) {
        event.target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
        if (!event.target.checkValidity()) {
            // invalid
            event.target.parentNode.classList.add('mdc-text-field--invalid');
            // this.isSubmitDisabled();
        } else {
            // valid
            event.target.parentNode.classList.remove('mdc-text-field--invalid');
            // this.isSubmitDisabled();
        }
    }

    // isSubmitDisabled() {
    //     const formValid = (<HTMLFormElement>document.getElementById('join-form')).checkValidity();
    //     this.submitDisabled = !formValid;
    // }
}
