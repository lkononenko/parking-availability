import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GarageListComponent } from './garage-list/garage-list.component';


const productsRoutes: Routes = [
  { path: 'garages',  component: GarageListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(productsRoutes) ],
  exports: [ RouterModule ]
})
export class GaragesRoutingModule { }
