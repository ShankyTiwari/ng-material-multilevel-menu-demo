import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutVariationsComponent } from './layout-variations.component';

const routes: Routes = [{
  path: '',
  component: LayoutVariationsComponent,
  children: [
    {
      path: 'demo-one',
      loadChildren: './demo-one/demo-one.module#DemoOneModule'
    },
    {
      path: 'demo-two',
      loadChildren: './demo-two/demo-two.module#DemoTwoModule'
    },
    {
      path: 'demo-three',
      loadChildren: './demo-three/demo-three.module#DemoThreeModule'
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
export class LayoutVariationsRoutingModule { }
