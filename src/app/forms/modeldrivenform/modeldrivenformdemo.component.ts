import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from "../../models/customer.model";

@Component({
    selector: 'modeldrivenform',
    moduleId: module.id,
    templateUrl: 'modeldrivenformdemo.component.html'
})

export class ModelDrivenFormDemoComponent implements OnInit {
    pageTitle: string = "DEMO model driven form";
    customer: Customer = new Customer();

    constructor() { }

    ngOnInit() { }

    save(customerForm: NgForm){
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
}