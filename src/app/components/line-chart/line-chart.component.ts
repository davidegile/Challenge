import { Component, Input, ViewChild } from '@angular/core';
import { ApexChart, ApexXAxis, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @Input() title: string = 'Sensor data';

  chartOptions = {
    series: [],
    chart: {
      height: 300,
      width: '100%',
      type: 'line',
    } as ApexChart,
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [],
    } as ApexXAxis,
    yaxis: {
      title: {
        text: 'Sensor data',
      },
    },
    title: {
      text: this.title,
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  };

  ngOnChanges() {
    setTimeout(() => {
      this.chart.updateOptions({
        title: {
          text: this.title,
          align: 'left',
          style: {
            fontSize: '16px',
            color: '#666',
          },
        },
      });
    }, 200);
  }
}
