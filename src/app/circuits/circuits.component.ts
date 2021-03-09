import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CircuitsService } from '../shared/services/circuits.service';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss'],
})
export class CircuitsComponent implements OnInit {
  results$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private resultsServices: CircuitsService
  ) {}

  ngOnInit(): void {
    this.results$ = this.route.params.pipe(
      switchMap((params: Params) => this.resultsServices.getResults(params.id))
    );
  }
}
