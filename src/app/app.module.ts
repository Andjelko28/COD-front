import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './components/pages/pages.module';
import { HelpersModule } from "./components/helpers/helpers.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        PagesModule,
        HelpersModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
