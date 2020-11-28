import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectByIdRoutingModule } from './select-by-id-routing.module';
import { SelectByIdComponent } from './select-by-id.component';

import { MaterialsModule } from './../../../modules/materials.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  declarations: [SelectByIdComponent],
  imports: [
    CommonModule,
    SelectByIdRoutingModule,
    FormsModule,
    MaterialsModule,
    NgMaterialMultilevelMenuModule
  ]
})
export class SelectByIdModule { }
