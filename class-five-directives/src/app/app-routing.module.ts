import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'custom',
    component: CustomDirectiveComponent
  },
  {
    path: 'for',
    component: NgForComponent
  },
  {
    path: 'if',
    component: NgIfComponent
  },
  {
    path: 'switch',
    component: NgSwitchComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/custom'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
