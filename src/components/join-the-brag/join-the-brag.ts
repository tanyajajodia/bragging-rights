import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu';
import { MDCDialog } from '@material/dialog';
import * as $ from 'jquery';


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
    dialog: MDCDialog;

    constructor(private formBuilder: FormBuilder, private router: Router) {
        this.joinForm = formBuilder.group({
            firstName: null,
            lastName: null,
            email: null,
            firstNameSuggested: null,
            lastNameSuggested: null,
            reasonForNomination: null
        });
    }

    // highlights menu according to what page you are currently viewing
    ngAfterViewInit() {
        this.menuComponent.isActive('join');
        this.dialog = new MDCDialog(document.querySelector('#email-confirmation'));
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

    onSubmit() {

        const dialog = this.dialog;
        const router = this.router;
        let header = 'Thanks for your interest in becoming a bragger!';
        let message = 'Amy Dalton will be in touch with you soon.';

        const formData = {
            firstName: this.joinForm.get('firstName').value,
            lastName: this.joinForm.get('lastName').value,
            email: this.joinForm.get('email').value,
            firstNameSuggested: null,
            lastNameSuggested: null,
            reasonForNomination: null
        };

        if (this.suggestBtnActive) {
            formData.firstNameSuggested = this.joinForm.get('firstNameSuggested').value;
            formData.lastNameSuggested = this.joinForm.get('lastNameSuggested').value;
            formData.reasonForNomination = this.joinForm.get('reasonForNomination').value;
            header = 'Thanks for your suggestion!';
            message = 'Amy Dalton will reach out to the potential bragger.';
        }

        $.ajax({
            url: 'https://formspree.io/ambyrshae.jarrell@gmail.com',
            method: 'POST',
            data: formData,
            dataType: 'json'
        });

        // show email confirmation then route back to Braggers when OK selected
        document.querySelector('#email-confirmation-label').innerHTML = header;
        document.querySelector('#email-confirmation-description').innerHTML = message;
        dialog.show();
        dialog.listen('MDCDialog:accept', function() {
            (dialog.getDefaultFoundation() as any).adapter_.removeBodyClass('mdc-dialog-scroll-lock');
            router.navigateByUrl('braggers');
        });
    }
}
