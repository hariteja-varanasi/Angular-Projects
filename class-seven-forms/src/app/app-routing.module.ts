import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StaticFormComponent } from './components/static-form/static-form.component';

const routes: Routes = [
  {
    path: 'dynamic',
    component: DynamicFormComponent
  },
  {
    path: 'static',
    component: StaticFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/static'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
