import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircuitsRoutingModule } from './circuits-routing.module';
import { CircuitsComponent } from './circuits.component';

import { TemperatureConverterPipe } from '../shared/pipes/temp.pipe';

@NgModule({
  declarations: [CircuitsComponent, TemperatureConverterPipe],
  imports: [CommonModule, CircuitsRoutingModule],
})
export class CircuitsModule {}
