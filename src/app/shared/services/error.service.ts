import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  /*
  * Single place to handle errors
  */
  handleError(error) {
    return throwError(error);
  }
}
