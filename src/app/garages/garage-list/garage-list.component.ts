import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private garagesService: GaragesService,
              private router: Router) { }

  ngOnInit() {
    this.getGarages();
  }

  garageDetail(garage) {
    this.router.navigate(['/garages', garage.id]);
    this.garagesService.currentGarage = garage;
  }

  private getGarages() {
    this.garagesService.getGarages().subscribe(
      (garages: Garage[]) => this.garages = garages,
      (error: string) => this.errorMessage = error
    );
  }

}
