/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateCircuitsService {
  private circuits = new BehaviorSubject([]);
  currentCicuits$ = this.circuits.asObservable();
  constructor() {}

  updateListCircuits(products: any): void {
    this.circuits.next(products);
  }
}
