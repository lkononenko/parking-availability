import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Garage } from './garage.model';
import { CONST } from '../const';

@Injectable()
export class GaragesService {
  currentGarage: Garage;
  private garagesApiUrl: string = CONST.API + 'parking.garage/objects?per_page=25';

  constructor(private http: Http,
              private router: Router) { }

  getGarages(): Observable<Garage[]> {
    return this.http.get(this.garagesApiUrl)
      .map(this.extractGarages)
      .catch(this.handleError);
  }

  getGarageById(id) {
    return this.http.get(this.garagesApiUrl)
      .map((res: Response) => {
        let foundGarage = res.json().features
          .filter(garage => {
            let apiId = garage.properties.layer + '.' + id;
            return garage.properties.cdk_id == apiId;
          });

        if (foundGarage[0]) {
          return new Garage(foundGarage[0]);
        } else {
          this.router.navigate(['/garages']);
        }
      })
      .catch(this.handleError);
  }

  private extractGarages(res: Response) {
    let garages: Garage[] = [];
    let mockElement: Garage = <Garage>{
      id: 'mock-garage',
      name: 'Mock Garage without free places',
      longCapacity: 120,
      shortCapacity: 100,
      freeSpaceLong: 0,
      freeSpaceShort: 0,
      coords: { lon: 4.867133, lat: 52.393721 },
      totalSpaces: 220,
      freeSpaces: 0
    };

    res.json().features.map(
      garage => garages.push(new Garage(garage))
    );
    garages.unshift(mockElement);
    return garages;
  }

  private handleError(error: Response | any) {
    let errMsg: string = 'Sorry, something went wrong! ';
    if (error instanceof Response) {
      errMsg += `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg += error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
