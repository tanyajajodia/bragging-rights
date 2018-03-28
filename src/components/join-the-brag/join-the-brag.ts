import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    joinForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.joinForm = formBuilder.group({
            firstName: '',
            lastName: '',
            email: '',
            firstNameSuggested: '',
            lastNameSuggested: '',
            reasonForNomination: ''
        });
    }

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('join');
    }

    // disables part of the form and adds styling to buttons
    becomeABragger() {
        this.becomeBtnActive = true;
        this.formDisabled = true;
        this.suggestBtnActive = false;
    }

    // enables part of the form and adds styling to buttons
    suggestABragger() {
        this.suggestBtnActive = true;
        this.becomeBtnActive = false;
        this.formDisabled = false;
    }

    // styling: sets classes when input focused
    onFocus(event) {
        const target = event.target;
        const parent = target.parentNode;

        parent.classList.add('mdc-text-field--focused');
        parent.classList.add('mdc-text-field-focus');
        target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
    }

    // styling: sets classes when input blurred
    onBlur(event) {
        const target = event.target;
        const parent = target.parentNode;

        parent.classList.remove('mdc-text-field--focused');
        parent.classList.remove('mdc-text-field-focus');

        if (target.value === '') {
            target.nextElementSibling.classList.remove('mdc-text-field__label--float-above');
        }
    }

    // styling: sets appropriate classes to input fields according to validity
    checkValidity(event) {
        event.target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
        if (!event.target.checkValidity()) {
            // invalid
            event.target.parentNode.classList.add('mdc-text-field--invalid');
        } else {
            // valid
            event.target.parentNode.classList.remove('mdc-text-field--invalid');
        }
    }
}
