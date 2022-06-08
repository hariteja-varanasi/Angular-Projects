import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    CustomDirectiveComponent,
    PageNotFoundComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
