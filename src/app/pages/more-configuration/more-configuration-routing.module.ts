import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreConfigurationComponent } from './more-configuration.component';

const routes: Routes = [{
  path: '',
  component: MoreConfigurationComponent,
  children: [
    {
      path: 'disable-padding',
      loadChildren: './disable-padding/disable-padding.module#DisablePaddingModule'
    },
    {
      path: 'disable-routing',
      loadChildren: './disable-routing/disable-routing.module#DisableRoutingModule'
    },
    {
      path: 'expand-collapse',
      loadChildren: './expand-collapse/expand-collapse.module#ExpandCollapseModule'
    },
    {
      path: '**',
      redirectTo: 'demo-one',
    }
  ]
}, {
  path: '**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreConfigurationRoutingModule { }
