import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';



@NgModule({

  declarations: [

    AppComponent,

    SecondComponent,

    FirstComponent,


  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    MaterialModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }