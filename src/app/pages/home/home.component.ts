import { Component, ViewChild } from '@angular/core';
import { ApexXAxis } from 'ng-apexcharts';
import { LineChartComponent } from 'src/app/components/line-chart/line-chart.component';
import {
  DataItem,
  SensorDataService,
} from 'src/app/services/sensor-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('frontLeftChart') frontLeftChart!: LineChartComponent;
  @ViewChild('frontRightChart') frontRightChart!: LineChartComponent;
  @ViewChild('rearLeftChart') rearLeftChart!: LineChartComponent;
  @ViewChild('rearRightChart') rearRightChart!: LineChartComponent;

  loading: boolean = true;

  constructor(public sensorDataService: SensorDataService) {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  handleStartCronometer() {
    this.sensorDataService.$sensorData.subscribe((data: any) => {
      const listOfFrontLeftData: DataItem[] = data.filter(
        (item: DataItem) => item.Position === 'Front Left'
      );
      const listOfFrontRightData: DataItem[] = data.filter(
        (item: DataItem) => item.Position === 'Front Rigth'
      );
      const listOfRearLeftData: DataItem[] = data.filter(
        (item: DataItem) => item.Position === 'Rear Left'
      );
      const listOfRearRightData: DataItem[] = data.filter(
        (item: DataItem) => item.Position === 'Rear Rigth'
      );

      const listOfTimestamp = data.map((item: DataItem) => item.Timestamp);

      this.frontLeftChart.chart.updateOptions({
        series: [
          {
            name: 'Speed',
            data: listOfFrontLeftData.map((item: DataItem) => item.Speed),
          },
          {
            name: 'Angular velocity',
            data: listOfFrontLeftData.map((item: DataItem) => item.Omega),
          },
          {
            name: 'Temperature',
            data: listOfFrontLeftData.map((item: DataItem) => item.Temp),
          },
          {
            name: 'Pressure',
            data: listOfFrontLeftData.map((item: DataItem) => item.Press),
          },
        ],
        xaxis: {
          type: 'datetime',
          categories: listOfTimestamp,
        } as ApexXAxis,
      });

      this.frontRightChart.chart.updateOptions({
        series: [
          {
            name: 'Speed',
            data: listOfFrontRightData.map((item: DataItem) => item.Speed),
          },
          {
            name: 'Angular velocity',
            data: listOfFrontRightData.map((item: DataItem) => item.Omega),
          },
          {
            name: 'Temperature',
            data: listOfFrontRightData.map((item: DataItem) => item.Temp),
          },
          {
            name: 'Pressure',
            data: listOfFrontRightData.map((item: DataItem) => item.Press),
          },
        ],
        xaxis: {
          type: 'datetime',
          categories: listOfTimestamp,
        } as ApexXAxis,
      });

      this.rearLeftChart.chart.updateOptions({
        series: [
          {
            name: 'Speed',
            data: listOfRearLeftData.map((item: DataItem) => item.Speed),
          },
          {
            name: 'Angular velocity',
            data: listOfRearLeftData.map((item: DataItem) => item.Omega),
          },
          {
            name: 'Temperature',
            data: listOfRearLeftData.map((item: DataItem) => item.Temp),
          },
          {
            name: 'Pressure',
            data: listOfRearLeftData.map((item: DataItem) => item.Press),
          },
        ],
        xaxis: {
          type: 'datetime',
          categories: listOfTimestamp,
        } as ApexXAxis,
      });

      this.rearRightChart.chart.updateOptions({
        series: [
          {
            name: 'Speed',
            data: listOfRearRightData.map((item: DataItem) => item.Speed),
          },
          {
            name: 'Angular velocity',
            data: listOfRearRightData.map((item: DataItem) => item.Omega),
          },
          {
            name: 'Temperature',
            data: listOfRearRightData.map((item: DataItem) => item.Temp),
          },
          {
            name: 'Pressure',
            data: listOfRearRightData.map((item: DataItem) => item.Press),
          },
        ],
        xaxis: {
          type: 'datetime',
          categories: listOfTimestamp,
        } as ApexXAxis,
      });
    });
  }
}
