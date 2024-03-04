import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { DatePipe } from '@angular/common';

export interface DataItem {
  Timestamp: string;
  Press: number;
  Position: string;
  Temp: number;
  Omega: number;
  Speed: number;
  Car_id: number;
}

@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  $sensorData = new BehaviorSubject([]);

  constructor(
    private supabaseService: SupabaseService,
    private datePipe: DatePipe
  ) {}

  async fetchFirst(carList: string[]) {
    return await this._getSensorData(carList);
  }

  fetch(timestamp: Date, duration: number, carList: string[]) {
    console.log('fetching data');
    this._getSensorDataByTimestamp(timestamp, duration, carList).then(
      (data) => {
        this.$sensorData.next(
          this.$sensorData.getValue().concat(data.data as [])
        );
      }
    );
  }

  private async _getSensorData(carList: string[]) {
    return await this.supabaseService
      .getSupabaseClient()
      .from('sensor_data')
      .select('*')
      .gt('Press', 0)
      .gt('Omega', 0)
      .in('Car_id', carList)
      .order('Timestamp', { ascending: true })
      .limit(1);
  }

  private async _getSensorDataByTimestamp(
    timestamp: Date,
    duration: number,
    carList: string[]
  ) {
    const from = new Date(timestamp.getTime() - duration);
    const to = timestamp;

    return await this.supabaseService
      .getSupabaseClient()
      .from('sensor_data')
      .select('*')
      .gt('Press', 0)
      .gt('Omega', 0)
      .gte('Timestamp', this.datePipe.transform(from, 'yyyy-MM-dd HH:mm:ss')!)
      .lt('Timestamp', this.datePipe.transform(to, 'yyyy-MM-dd HH:mm:ss')!)
      .in('Car_id', carList)
      .order('Timestamp', { ascending: true });
  }
}
