import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ConnectedComponent } from './connected/connected.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ConnectedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }