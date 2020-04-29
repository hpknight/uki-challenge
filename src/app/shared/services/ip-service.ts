import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ErrorService } from './error.service';
import { API_IPSTACK_ACCESS_KEY, LocationResponse, IpResponse } from './../constants/global.constants';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService
  ) { }

  public getIPAddress() {  
    return this._http
      .get<IpResponse>('http://api.ipify.org/?format=json')
      .pipe(
        catchError(error => {
          return this._errorService.handleError(error);
        })
      );  
  } 

  public getLocationInfo(ip: string) {
    return this._http
      .get<LocationResponse>(`http://api.ipstack.com/${ip}?access_key=${API_IPSTACK_ACCESS_KEY}&fields=latitude,longitude,ip,city`)
      .pipe(
        catchError(error => {
          return this._errorService.handleError(error);
        })
      );  
  }
}
