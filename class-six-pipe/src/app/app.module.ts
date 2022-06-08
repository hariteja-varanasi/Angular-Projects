import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './components/built-in-pipe/built-in-pipe.component';
import { ChainingPipeComponent } from './components/chaining-pipe/chaining-pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { ParameterizedPipeComponent } from './components/parameterized-pipe/parameterized-pipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductPipePipe } from './pipes/product-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent,
    ChainingPipeComponent,
    CustomPipeComponent,
    ParameterizedPipeComponent,
    PageNotFoundComponent,
    ProductPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
