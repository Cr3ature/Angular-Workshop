import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AllPhian } from "../../models/allphians.model";
import { AllPhianService } from "../allphians.service";

@Component({
    moduleId: module.id,
    templateUrl: 'allphians.component.html',
    styleUrls: ['./allphians.component.css'],
    providers: [AllPhianService]
})

export class AllphianComponent implements OnInit {
    public pageTitle: string = "Deze demo werd gerealiseerd door";
    public allphians: AllPhian[];
    public allphian: AllPhian;
    public error: string;

    constructor(private _allphianService: AllPhianService,
                private _router: Router) { }

    ngOnInit() {
        this._allphianService.getAllPhians().subscribe(
            allphians => this.allphians = allphians,
            error => {
                this.error = "Something went wrong fetching the AllPhians";
                console.log(error);
            }
        )
     }

    goToTechnologies(){
        this._router.navigate(["/technologies"]);
    }
}