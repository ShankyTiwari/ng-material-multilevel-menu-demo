import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreConfigurationComponent } from './more-configuration.component';

const routes: Routes = [{
  path: 'more-configuration',
  component: MoreConfigurationComponent,
  children: [
    {
      path: 'disable-padding',
      loadChildren: 'src/app/pages/more-configuration/disable-padding/disable-padding.module#DisablePaddingModule'
    },
    {
      path: 'disable-routing',
      loadChildren: 'src/app/pages/more-configuration/disable-routing/disable-routing.module#DisableRoutingModule'
    }
  ]
}, {
    path: '',
    redirectTo: 'more-configuration',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreConfigurationRoutingModule { }
