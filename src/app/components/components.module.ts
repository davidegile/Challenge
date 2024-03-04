import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCarsComponent } from './select-cars/select-cars.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { CronometerComponent } from './cronometer/cronometer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [
    SelectCarsComponent,
    DataTableComponent,
    LineChartComponent,
    CronometerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzEmptyModule,
    NgApexchartsModule,
    NzModalModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [
    SelectCarsComponent,
    DataTableComponent,
    LineChartComponent,
    CronometerComponent,
  ],
})
export class ComponentsModule {}
