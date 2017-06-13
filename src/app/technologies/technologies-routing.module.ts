import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiesListComponent } from './technologies-list/technologies-list.component';

const routes: Routes = [
  { path: '', component: TechnologiesListComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologiesRoutingModule { }