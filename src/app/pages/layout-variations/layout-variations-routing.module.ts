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
<<<<<<< HEAD
      loadChildren: 'src/app/pages/layout-variations/demo-three/demo-three.module#DemoThreeModule'
    },
    {
      path: 'demo-four',
      loadChildren: 'src/app/pages/layout-variations/demo-four/demo-four.module#DemoFourModule'
    },
    {
      path: 'demo-five',
      loadChildren: 'src/app/pages/layout-variations/demo-five/demo-five.module#DemoFiveModule'
=======
      loadChildren: './demo-three/demo-three.module#DemoThreeModule'
    },
    {
      path: '**',
      redirectTo: 'demo-one',
>>>>>>> d79afb5dd0fe89e16593fe93428482a344140871
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
