import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MaterialsModule } from './../../../modules/materials.module';

import { DisableRoutingRoutingModule } from './disable-routing-routing.module';
import { DisableRoutingComponent } from './disable-routing.component';

@NgModule({
  imports: [
    CommonModule,
    DisableRoutingRoutingModule,
    NgMaterialMultilevelMenuModule,
    MaterialsModule
  ],
  declarations: [DisableRoutingComponent]
})
export class DisableRoutingModule { }
