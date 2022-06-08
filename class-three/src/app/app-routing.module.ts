import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './components/class/class.component';
import { EventComponent } from './components/event/event.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StyleComponent } from './components/style/style.component';

const routes: Routes = [
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'style',
    component: StyleComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/event'
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
