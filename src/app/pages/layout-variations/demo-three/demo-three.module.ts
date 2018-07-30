import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MaterialsModule } from './../../../modules/materials.module';

import { DemoThreeRoutingModule } from './demo-three-routing.module';
import { DemoThreeComponent } from './demo-three.component';

@NgModule({
  imports: [
    CommonModule,
    DemoThreeRoutingModule,
    NgMaterialMultilevelMenuModule,
    MaterialsModule
  ],
  declarations: [DemoThreeComponent]
})
export class DemoThreeModule { }
