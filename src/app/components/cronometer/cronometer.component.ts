import { Component, EventEmitter, Output } from '@angular/core';
import { SensorDataService } from 'src/app/services/sensor-data.service';

@Component({
  selector: 'app-cronometer',
  templateUrl: './cronometer.component.html',
  styleUrl: './cronometer.component.scss',
})
export class CronometerComponent {
  cronometer: Date | undefined;
  cronometerInterval: any;
  updateDataInterval: any;

  carList: string[] = [];

  @Output() onCronometerStart = new EventEmitter();

  constructor(private sensorDataService: SensorDataService) {}

  async startCronometer(carList: string[] | null = null) {
    if (!this.cronometer && carList) {
      this.carList = carList;
      const data = await this.sensorDataService.fetchFirst(carList);
      if (data && data.data) this.cronometer = new Date(data.data[0].Timestamp);
      this.onCronometerStart.emit();
    } else {
      carList = this.carList;
    }

    this.cronometerInterval = setInterval(() => {
      this.cronometer = new Date(this.cronometer!.getTime() + 1000);
    }, 10);

    this.updateDataInterval = setInterval(() => {
      this.sensorDataService.fetch(this.cronometer!, 300000, carList!);
    }, 3000);
  }

  stopCronometer() {
    clearInterval(this.cronometerInterval);
    clearInterval(this.updateDataInterval);
    this.cronometerInterval = undefined;
    this.updateDataInterval = undefined;
  }
}
