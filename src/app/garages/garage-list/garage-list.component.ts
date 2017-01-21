import { Component, OnInit } from '@angular/core';

import { GaragesService } from '../garages.service';
import { Garage } from '../garage.model';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {
  garages: Garage[];
  errorMessage: string;

  constructor(private garagesService: GaragesService) { }

  ngOnInit() {
    this.getGarages();
  }

  private getGarages() {
    this.garagesService.getGarages().subscribe(
      (garages: Garage[]) => this.garages = garages,
      (error: string) => this.errorMessage = error
    );
  }

}
