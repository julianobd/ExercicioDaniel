import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { ServerProfileComponent } from './server-profile/server-profile.component';
import { ServerUpdateComponent } from './server-update/server-update.component';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ExpTableComponent } from './exp-table/exp-table.component';
import { ExpTableUpdateComponent } from './exp-table/exp-table-update/exp-table-update.component';
import { ExpTableCreateComponent } from './exp-table/exp-table-create/exp-table-create.component';
import { ExpTableDeleteComponent } from './exp-table/exp-table-delete/exp-table-delete.component';
import { AvailableItemsComponent } from './available-items/available-items.component';
import { AvailableItemsCreateComponent } from './available-items/available-items-create/available-items-create.component';
import { AvailableItemsDeleteComponent } from './available-items/available-items-delete/available-items-delete.component';
import { AvailableItemsUpdateComponent } from './available-items/available-items-update/available-items-update.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { ParcelsCreateComponent } from './parcels/parcels-create/parcels-create.component';
import { ParcelsDeleteComponent } from './parcels/parcels-delete/parcels-delete.component';
import { ParcelsUpdateComponent } from './parcels/parcels-update/parcels-update.component';


@NgModule({
  declarations: [
    ServersComponent,
    ServerProfileComponent,
    ServerUpdateComponent,
    ServerCreateComponent,
    ExpTableComponent,
    ExpTableUpdateComponent,
    ExpTableCreateComponent,
    ExpTableDeleteComponent,
    AvailableItemsComponent,
    AvailableItemsCreateComponent,
    AvailableItemsDeleteComponent,
    AvailableItemsUpdateComponent,
    ParcelsComponent,
    ParcelsCreateComponent,
    ParcelsDeleteComponent,
    ParcelsUpdateComponent
  ],
  imports: [
    CommonModule,
    ServersRoutingModule,
    SharedModule
  ]
})
export class ServersModule { }
