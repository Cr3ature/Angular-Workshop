import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ModelDrivenFormDemoComponent } from './modeldrivenformdemo.component';

const routes: Routes = [
    { path: 'modeldrivenforms', component: ModelDrivenFormDemoComponent, pathMatch: "full" }
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

export class ModelDrivenFormsDemoRoutingModule { }