import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'welcome',
    loadChildren : './welcome/welcome.module#WelcomeModule',
    pathMatch : 'full'
  },
  {
    path : 'main',
    loadChildren : './main/main.module#MainModule',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo: 'welcome',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
