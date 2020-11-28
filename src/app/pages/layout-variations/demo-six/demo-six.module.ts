import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { MaterialsModule } from './../../../modules/materials.module';
import { DemoSixRoutingModule } from './demo-six-routing.module';
import { DemoSixComponent } from './demo-six.component';

@NgModule({
  declarations: [DemoSixComponent],
  imports: [
    CommonModule,
    DemoSixRoutingModule,
    MaterialsModule,
    NgMaterialMultilevelMenuModule
  ]
})
export class DemoSixModule { }
