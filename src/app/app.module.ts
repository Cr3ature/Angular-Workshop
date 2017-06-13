// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

// Routing modules
import { AppRoutingModule } from "./app-routing.module";
import { BsDropdownModule } from 'ngx-bootstrap';

// Feature modules
import { ModelDrivenFormDemoModule } from "./forms/modeldrivenform/modeldrivenformdemo.module";
import { ReactiveFormDemoModule } from "./forms/reactiveform/reactiveformdemo.module";

// In Memory DATA
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDbData } from "./data/InMemoryDbData";

// Components
import { AppComponent } from './app.component';
import { AllphianComponent } from "./allphians/overview/allphians.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AllphiansDetailComponent } from './allphians/detail/allphians-detail.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AllphianComponent,
    PagenotfoundComponent,
    AllphiansDetailComponent,
    ContactComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    HttpModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemDbData, { delay: 500 }),
    ModelDrivenFormDemoModule,
    ReactiveFormDemoModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
