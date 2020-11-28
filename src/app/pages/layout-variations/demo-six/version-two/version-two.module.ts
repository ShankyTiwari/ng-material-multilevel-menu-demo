import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MaterialsModule } from './../../../../modules/materials.module';

import { VersionTwoRoutingModule } from './version-two-routing.module';
import { VersionTwoComponent } from './version-two.component';


@NgModule({
  declarations: [VersionTwoComponent],
  imports: [
    CommonModule,
    VersionTwoRoutingModule,
    NgMaterialMultilevelMenuModule,
    MaterialsModule,
  ]
})
export class VersionTwoModule { }
