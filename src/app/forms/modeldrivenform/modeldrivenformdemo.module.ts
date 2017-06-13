// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// Routing modules
import { ModelDrivenFormsDemoRoutingModule } from "./modeldrivenformdemo-routing.module";
// Components
import { ModelDrivenFormDemoComponent } from './modeldrivenformdemo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModelDrivenFormsDemoRoutingModule
    ],
    exports: [],
    declarations: [
        ModelDrivenFormDemoComponent
    ],
    providers: [],
})
export class ModelDrivenFormDemoModule { }
