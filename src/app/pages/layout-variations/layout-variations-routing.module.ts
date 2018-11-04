import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutVariationsComponent } from './layout-variations.component';

const routes: Routes = [{
  path: 'layout-variations',
  component: LayoutVariationsComponent,
  children: [
    {
      path: 'demo-one',
      loadChildren: 'src/app/pages/layout-variations/demo-one/demo-one.module#DemoOneModule'
    },
    {
      path: 'demo-two',
      loadChildren: 'src/app/pages/layout-variations/demo-two/demo-two.module#DemoTwoModule'
    },
    {
      path: 'demo-three',
      loadChildren: 'src/app/pages/layout-variations/demo-three/demo-three.module#DemoThreeModule'
    },
    {
      path: 'demo-four',
      loadChildren: 'src/app/pages/layout-variations/demo-four/demo-four.module#DemoFourModule'
    },
    {
      path: 'demo-five',
      loadChildren: 'src/app/pages/layout-variations/demo-five/demo-five.module#DemoFiveModule'
    }
  ]
}, {
    path: '',
    redirectTo: 'layout-variations/layout-variations/demo-one',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutVariationsRoutingModule { }
