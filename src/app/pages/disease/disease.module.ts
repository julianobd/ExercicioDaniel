import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseaseRoutingModule } from './disease-routing.module';
import { DiseaseComponent } from './disease.component';
import { DiseaseCreateComponent } from './disease-create/disease-create.component';
import { DiseaseDeleteComponent } from './disease-delete/disease-delete.component';
import { DiseaseUpdateComponent } from './disease-update/disease-update.component';


@NgModule({
  declarations: [DiseaseComponent, DiseaseCreateComponent, DiseaseDeleteComponent, DiseaseUpdateComponent],
  imports: [
    CommonModule,
    DiseaseRoutingModule,
    SharedModule
  ]
})
export class DiseaseModule { }