import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CircuitsService {
  constructor(private http: HttpClient) {}

  getCircuits() {
    return this.http.get(`http://ergast.com/api/f1/2021.json`);
  }

  getResults(round: string) {
    return this.http.get(
      `https://ergast.com/api/f1/2020/${round}/results.json`
    );
  }
}
