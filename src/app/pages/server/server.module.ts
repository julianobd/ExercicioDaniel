import { ParcelsComponent } from './parcels/parcels.component';
import { AvailableItemsUpdateComponent } from './available-items/available-items-update/available-items-update.component';
import { AvailableItemsDeleteComponent } from './available-items/available-items-delete/available-items-delete.component';
import { AvailableItemsCreateComponent } from './available-items/available-items-create/available-items-create.component';
import { AvailableItemsComponent } from './available-items/available-items.component';
import { ExpTableComponent } from './exp-table/exp-table.component';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ServerProfileComponent } from './server-profile/server-profile.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { ServerComponent } from './server.component';
import { ExpTableFormComponent } from './exp-table/exp-table-form/exp-table-form.component';
import { ParcelFormComponent } from './parcels/parcel-form/parcel-form.component';
import { ServerFormComponent } from './server-form/server-form.component';


@NgModule({
  declarations: [
    ServerComponent,
    ServerProfileComponent,
    ServerCreateComponent,
    ExpTableComponent,
    AvailableItemsComponent,
    AvailableItemsCreateComponent,
    AvailableItemsDeleteComponent,
    AvailableItemsUpdateComponent,
    ParcelsComponent,
    ExpTableFormComponent,
    ParcelFormComponent,
    ServerFormComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
    SharedModule
  ]
})
export class ServerModule { }
