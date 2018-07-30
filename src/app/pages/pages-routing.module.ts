import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'layout-variations',
        loadChildren: 'src/app/pages/layout-variations/layout-variations.module#LayoutVariationsModule'
      },
      {
        path: 'more-configuration',
        loadChildren: 'src/app/pages/more-configuration/more-configuration.module#MoreConfigurationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
