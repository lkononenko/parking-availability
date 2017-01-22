import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { GaragesRoutingModule } from './garages-routing.module';
import { GarageListComponent } from './garage-list/garage-list.component';
import { GaragesService } from './garages.service';
import { GarageDetailComponent } from './garage-detail/garage-detail.component';
import { CONST } from "../const";

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: CONST.GOOGLE_MAP_API_KEY
    }),

    GaragesRoutingModule
  ],
  declarations: [ GarageListComponent, GarageDetailComponent ],
  providers: [ GaragesService ]
})
export class GaragesModule {

  constructor() {
    console.log(CONST.GOOGLE_MAP_API_KEY);
  }
}
