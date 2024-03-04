import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NzSpinModule,
    NzGridModule,
    NzIconModule,
    NzImageModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
