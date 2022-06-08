import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindComponent } from './components/bind/bind.component';
import { InterpolationBindComponent } from './components/interpolation-bind/interpolation-bind.component';
import { PropertyBindComponent } from './components/property-bind/property-bind.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    InterpolationBindComponent,
    PropertyBindComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
