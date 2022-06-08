import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: 'ref',
    component: TemplateReferenceComponent
  },
  {
    path: 'twb',
    component: TwoWayBindingComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ref'
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
