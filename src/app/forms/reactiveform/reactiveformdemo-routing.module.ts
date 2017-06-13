import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ReactiveFormDemoComponent } from './reactiveformdemo.component';

const routes: Routes = [
    { path: 'reactiveform', component: ReactiveFormDemoComponent, pathMatch: "full" }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})

export class ReactiveFormDemoRoutingModule { }