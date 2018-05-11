import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu';
import { MDCDialog } from '@material/dialog';
import * as $ from 'jquery';
import { forEach } from '@angular/router/src/utils/collection';


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
    ngAfterViewInit(): void {
        this.menuComponent.isActive('join');
        this.dialog = new MDCDialog(document.querySelector('#email-confirmation'));
    }

    // disables part of the form and adds styling to buttons
    becomeABragger(): void {
        this.becomeBtnActive = true;
        this.formDisabled = true;
        this.suggestBtnActive = false;
    }

    // enables part of the form and adds styling to buttons
    suggestABragger(): void {
        this.suggestBtnActive = true;
        this.becomeBtnActive = false;
        this.formDisabled = false;
    }

    // styling: sets classes when input focused
    onFocus(event: any): void {
        const target = event.target;
        const parent = target.parentNode;

        parent.classList.add('mdc-text-field--focused');
        parent.classList.add('mdc-text-field-focus');
        target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
    }

    // styling: sets classes when input blurred
    onBlur(event: any): void {
        const target = event.target;
        const parent = target.parentNode;

        parent.classList.remove('mdc-text-field--focused');
        parent.classList.remove('mdc-text-field-focus');

        if (target.value === '') {
            target.nextElementSibling.classList.remove('mdc-text-field__label--float-above');
        }
    }

    // styling: sets appropriate classes to input fields according to validity
    checkValidity(event: any): void {
        event.target.nextElementSibling.classList.add('mdc-text-field__label--float-above');
        if (!event.target.checkValidity()) {
            // invalid
            event.target.parentNode.classList.add('mdc-text-field--invalid');
        } else {
            // valid
            event.target.parentNode.classList.remove('mdc-text-field--invalid');
        }
    }

    // submits the form
    onSubmit() {
        const data = this.getData();
        this.sendEmail(data);
    }

    // get data that will be sent via email
    private getData(): FormData {

        const formData = {
            firstName: this.joinForm.get('firstName').value,
            lastName: this.joinForm.get('lastName').value,
            email: this.joinForm.get('email').value,
            firstNameSuggested: null,
            lastNameSuggested: null,
            reasonForNomination: null
        };

        let data = new FormData();
        data.append('First name', formData.firstName);
        data.append('Last name', formData.lastName);
        data.append('Email', formData.email);

        if (this.suggestBtnActive) {
            formData.firstNameSuggested = this.joinForm.get('firstNameSuggested').value;
            formData.lastNameSuggested = this.joinForm.get('lastNameSuggested').value;
            formData.reasonForNomination = this.joinForm.get('reasonForNomination').value;
            data.append('First name suggested', formData.firstNameSuggested);
            data.append('Last name suggested', formData.lastNameSuggested);
            if (formData.reasonForNomination != null) {
                data.append('Reason for nomination', formData.reasonForNomination);
            }
        }

        return data;
    }

    // send email with form data
    private sendEmail(formData: FormData): void {

        const joinComp = this;
        const url = 'https://script.google.com/macros/s/AKfycbwMq5ib4yStZYdyEpk122pteyVv0vl6RfMdupRqgPjFuJzLMos/exec';

        // url encode form data for sending as post data
        const encoded = Object.keys(formData).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(formData[k]);
        }).join('&');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            joinComp.showConfirmationMessage();
            return;
        };
        xhr.send(formData);
    }

    // show email confirmation then route back to Braggers when OK selected
    private showConfirmationMessage(): void {

        const router = this.router;
        const dialogFoundation = this.dialog.getDefaultFoundation() as any;

        let confirmationHeader = 'Thanks for your interest in becoming a bragger!';
        let confimationMessage = 'Amy Dalton will be in touch with you soon.';

        if (this.suggestBtnActive) {
            confirmationHeader = 'Thanks for your suggestion!';
            confimationMessage = 'Amy Dalton will reach out to the potential bragger.';
        }

        document.querySelector('#email-confirmation-label').innerHTML = confirmationHeader;
        document.querySelector('#email-confirmation-description').innerHTML = confimationMessage;

        this.dialog.show();
        this.dialog.listen('MDCDialog:accept', function() {
            dialogFoundation.adapter_.removeBodyClass('mdc-dialog-scroll-lock');
            router.navigateByUrl('braggers');
        });
    }
}
