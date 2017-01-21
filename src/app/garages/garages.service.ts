import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Garage } from './garage.model';
import { CONST } from '../const';

@Injectable()
export class GaragesService {

  constructor(private http: Http) { }

  getGarages(): Observable<Garage[]> {
    const garagesApiUrl = CONST.API + 'parking.garage/objects?per_page=25';

    return this.http.get(garagesApiUrl)
      .map(this.extractGarages)
      .catch(this.handleError);
  }

  private extractGarages(res: Response) {
    let garages: Garage[] = [];
    let mockElement: Garage = {
      id: 'mock-garage',
      name: 'Mock Garage without free places',
      longCapacity: 120,
      shortCapacity: 100,
      freeSpaceLong: 0,
      freeSpaceShort: 0,
      coords: { lon: '52.393721', lat: '4.867133' },
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
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
