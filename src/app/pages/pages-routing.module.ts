import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule',
    },
    {
      path: 'layout-variations',
      loadChildren: './layout-variations/layout-variations.module#LayoutVariationsModule'
    },
    {
      path: 'more-configuration',
      loadChildren: './more-configuration/more-configuration.module#MoreConfigurationModule'
    },
    {
      path: '**',
      redirectTo: 'home'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
