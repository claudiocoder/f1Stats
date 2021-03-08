import { Component, OnInit } from '@angular/core';
import { CircuitsService } from '../shared/services/circuits.service';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public circuits: any = [];

  constructor(private circuitsService: CircuitsService) {}

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
}
