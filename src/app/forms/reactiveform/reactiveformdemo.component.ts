import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { Customer } from "../../models/customer.model";

function emailMatcher(c: AbstractControl) {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}

@Component({
    selector: 'reactiveform',
    moduleId: module.id,
    templateUrl: 'reactiveformdemo.component.html'
})

export class ReactiveFormDemoComponent implements OnInit {
    pageTitle: string = "DEMO Reactive form";
    reactivecustomerForm: FormGroup;
    customer: Customer = new Customer();
    emailMessage: string;

    private validationMessages = {
        required: 'Vul je e-mail adres in.',
        pattern: 'Vul een geldig e-mail adres in.'
    };

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.reactivecustomerForm = this.fb.group({
            firstName: [
                '',
                [Validators.required, Validators.minLength(3)]
            ],
            lastName: [
                '',
                [Validators.required, Validators.maxLength(50)]
            ],
            emailGroup: this.fb.group({
                email: [
                    '',
                    [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
                ],
                confirmEmail: [
                    '',
                    [Validators.required]
                ]
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email'
        });

        this.reactivecustomerForm.get('notification')
            .valueChanges.subscribe(value => this.setNotification(value));

        const emailControl = this.reactivecustomerForm.get('emailGroup.email');
        emailControl
            .valueChanges
            .debounceTime(1000)
            .subscribe(value => this.setMessage(emailControl));
    };

    setNotification(notifyVia: string): void {
        const phoneControl = this.reactivecustomerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };

    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    };

    save() {
        console.log(this.reactivecustomerForm);
        console.log('Saved: ' + JSON.stringify(this.reactivecustomerForm.value));
    };

    // Test function
    populateTestData(): void {
        this.reactivecustomerForm.patchValue({
            firstName: 'David',
            lastName: 'Vanderheyden',
            emailGroup: { email: 'david.vanderheyden@allphi.eu'}
        });
    };
}