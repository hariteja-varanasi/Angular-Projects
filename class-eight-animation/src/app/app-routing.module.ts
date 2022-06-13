import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationOneComponent } from './components/animation-one/animation-one.component';
import { AnimationThreeComponent } from './components/animation-three/animation-three.component';
import { AnimationTwoComponent } from './components/animation-two/animation-two.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'animeOne',
    component: AnimationOneComponent
  },
  {
    path: 'animeTwo',
    component: AnimationTwoComponent
  },
  {
    path: 'animeThree',
    component: AnimationThreeComponent
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/animeOne'
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
