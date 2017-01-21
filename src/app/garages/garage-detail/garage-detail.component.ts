import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Garage } from '../garage.model';
import { GaragesService } from '../garages.service';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.component.html',
  styleUrls: ['./garage-detail.component.scss']
})
export class GarageDetailComponent implements OnInit {
  garage: Garage;
  errorMessage: string;

  constructor(private garagesService: GaragesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGarage();
  }

  private getGarage() {
    if (this.garagesService.currentGarage) {
      this.garage = this.garagesService.currentGarage;
    } else {
      this.route.params.subscribe(
        (params: Params) => this.garagesService.getGarageById(params['id']).subscribe(
          (garage: Garage) => {
            console.log('in get garage');
            console.log(garage);
            this.garage = garage
          },
          (error: string) => this.errorMessage = error
        )
      );
    }
  }

}
