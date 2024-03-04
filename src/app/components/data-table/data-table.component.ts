import { Component } from '@angular/core';
import { DataItem, SensorDataService } from 'src/app/services/sensor-data.service';

interface ColumnItem {
  name: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Timestamp',
    },
    {
      name: 'Pressure',
    },
    {
      name: 'Position',
    },
    {
      name: 'Temperature',
    },
    {
      name: 'Angular velocity',
    },
    {
      name: 'Linear	speed',
    },
    {
      name: 'Car',
    },
  ];
  listOfData: DataItem[] = [];

  constructor(private sensorDataService: SensorDataService) {
    this.sensorDataService.$sensorData.subscribe((data: any) => {
      this.listOfData = data;
    });
  }
}
