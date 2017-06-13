// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
// Routing modules
import { ReactiveFormDemoRoutingModule } from "./reactiveformdemo-routing.module";
// Components
import { ReactiveFormDemoComponent } from './reactiveformdemo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReactiveFormDemoRoutingModule
    ],
    exports: [],
    declarations: [
        ReactiveFormDemoComponent
    ],
    providers: [],
})

export class ReactiveFormDemoModule { }
