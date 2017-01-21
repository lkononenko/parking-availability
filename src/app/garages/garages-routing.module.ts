import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GarageListComponent } from './garage-list/garage-list.component';
import { GarageDetailComponent } from './garage-detail/garage-detail.component';


const productsRoutes: Routes = [
  { path: 'garages',  component: GarageListComponent },
  { path: 'garages/:id', component: GarageDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(productsRoutes) ],
  exports: [ RouterModule ]
})
export class GaragesRoutingModule { }
