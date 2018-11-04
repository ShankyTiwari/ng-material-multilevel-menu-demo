import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MaterialsModule } from './../../../modules/materials.module';

import { DemoFiveRoutingModule } from './demo-five-routing.module';
import { DemoFiveComponent } from './demo-five.component';

@NgModule({
  imports: [
    CommonModule,
    DemoFiveRoutingModule,
    NgMaterialMultilevelMenuModule,
    MaterialsModule
  ],
  declarations: [DemoFiveComponent]
})
export class DemoFiveModule { }
