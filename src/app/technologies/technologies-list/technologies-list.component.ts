import { Component, OnInit } from '@angular/core';
import { Technology } from "../../models/technology.model";
@Component({
    selector: 'app-technologies-list',
    templateUrl: './technologies-list.component.html',
    styleUrls: ['./technologies-list.component.css']
})
export class TechnologiesListComponent implements OnInit {

    private technologies: Technology[] = [
    {
        name: 'Angular',
        rating: 5
    },
    {
        name: 'Bootstrap',
        rating: 5
    },
    {
        name: 'C#',
        rating: 5
    },
    {
        name: 'ASP.NET',
        rating: 5
    }
    ];

    constructor() { }

    ngOnInit() {
    }

}
