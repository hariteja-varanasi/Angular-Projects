import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPipeComponent } from './components/built-in-pipe/built-in-pipe.component';
import { ChainingPipeComponent } from './components/chaining-pipe/chaining-pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParameterizedPipeComponent } from './components/parameterized-pipe/parameterized-pipe.component';

const routes: Routes = [
  {
    path: 'built-in',
    component: BuiltInPipeComponent
  },
  {
    path: 'custom',
    component: CustomPipeComponent
  },
  {
    path: 'parameter',
    component: ParameterizedPipeComponent
  },
  {
    path: 'chain',
    component: ChainingPipeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/built-in'
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
