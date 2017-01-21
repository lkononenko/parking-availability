import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaragesRoutingModule } from './garages-routing.module';
import { GarageListComponent } from './garage-list/garage-list.component';
import { GaragesService } from './garages.service';
import { GarageDetailComponent } from './garage-detail/garage-detail.component';

@NgModule({
  imports: [
    CommonModule,

    GaragesRoutingModule
  ],
  declarations: [ GarageListComponent, GarageDetailComponent ],
  providers: [ GaragesService ]
})
export class GaragesModule { }
