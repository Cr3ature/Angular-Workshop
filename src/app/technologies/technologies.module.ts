import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesRoutingModule } from "./technologies-routing.module";

import { TechnologiesListComponent } from './technologies-list/technologies-list.component';

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule
  ],
  declarations: [TechnologiesListComponent]
})
export class TechnologiesModule { }
