import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

import { CircuitsService } from '../shared/services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {
  results$: Observable<any> | undefined;
  weather$: Observable<any> | undefined;
  icon$: Observable<any> | undefined;
  observables: Observable<any> | undefined;
  location: any;

  constructor(
    private route: ActivatedRoute,
    private resultsServices: CircuitsService
  ) {
    this.location = {};
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(
          (params: Params) =>
            (this.results$ = this.resultsServices.getResults(params.id))
        ),
        switchMap((res: any) => {
          this.location = res.MRData.RaceTable.Races[0].Circuit.Location;
          this.weather$ = this.resultsServices.getWeather(
            this.location.lat,
            this.location.long
          );
          return this.weather$;
        }),
      )
      .subscribe(
        (res) => {},
        (error) => {
          this.location = {};
        }
      );
  }
}
