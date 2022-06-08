import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindComponent } from './components/bind/bind.component';
import { InterpolationBindComponent } from './components/interpolation-bind/interpolation-bind.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PropertyBindComponent } from './components/property-bind/property-bind.component';

const routes: Routes = [
  {
    path: 'bind',
    component: BindComponent
  },
  {
    path: 'prop',
    component: PropertyBindComponent
  },
  {
    path: 'interpol',
    component: InterpolationBindComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bind'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
