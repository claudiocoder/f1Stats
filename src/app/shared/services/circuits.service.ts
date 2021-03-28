import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CircuitsService {
  constructor(private http: HttpClient) {}

  getCircuits() {
    return this.http
      .get(`http://ergast.com/api/f1/2021.json`)
      .pipe(catchError(this.handleError));
  }

  getResults(round: string) {
    return this.http
      .get(`https://ergast.com/api/f1/2021/${round}/results.json`)
      .pipe(catchError(this.handleError));
  }

  getWeather(lat: string, lon: string) {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${environment.apiWeather}`
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
