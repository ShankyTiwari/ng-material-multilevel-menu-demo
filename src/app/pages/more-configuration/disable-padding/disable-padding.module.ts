import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { MaterialsModule } from './../../../modules/materials.module';

import { DisablePaddingRoutingModule } from './disable-padding-routing.module';
import { DisablePaddingComponent } from './disable-padding.component';

@NgModule({
  imports: [
    CommonModule,
    DisablePaddingRoutingModule,
    NgMaterialMultilevelMenuModule,
    MaterialsModule
  ],
  declarations: [DisablePaddingComponent]
})
export class DisablePaddingModule { }
