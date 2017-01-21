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
    return res.json().features.map(
      garage => new Garage(garage)
    );
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
