import { Component, OnInit } from '@angular/core';
import { CircuitsService } from '../shared/services/circuits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public circuits: any = [];

  constructor(
    private circuitsService: CircuitsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.circuitsService.getCircuits().subscribe(
      (circuits: any) => {
        this.circuits = circuits.MRData.RaceTable.Races;
      },
      (error) => {}
    );
  }

  onSwiper(swiper: any) {}
  onSlideChange() {}
  redirect(round: string) {
    this.router.navigate([`/circuits/${round}`]);
  }
}
