import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AllphianComponent } from './allphians/overview/allphians.component';
import { AllphiansDetailComponent } from "./allphians/detail/allphians-detail.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ContactComponent } from "./contact/contact.component";
const appRoutes: Routes = [
    {
        path: 'allphians',
        component: AllphianComponent
    },
    {
        path: 'allphians/:id',
        component: AllphiansDetailComponent
    },
    {
        path: "contact",
        component: ContactComponent,
        outlet: "popupcontact"
    },
    {
        path: "technologies",
        loadChildren: "app/technologies/technologies.module#TechnologiesModule"
    },
    {
        path: '',
        redirectTo: 'allphians',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }