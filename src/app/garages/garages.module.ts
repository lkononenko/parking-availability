import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageListComponent } from './garage-list/garage-list.component';
import { GaragesService } from './garages.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ GarageListComponent ],
  providers: [ GaragesService ]
})
export class GaragesModule { }
