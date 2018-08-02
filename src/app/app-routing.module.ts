import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/pages/home',
  pathMatch: 'full',
}, {
  path: 'pages',
  loadChildren: './pages/pages.module#PagesModule',
}, {
  path: '**',
  redirectTo: '/pages/home',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
