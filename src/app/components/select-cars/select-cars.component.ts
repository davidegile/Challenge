import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-cars',
  templateUrl: './select-cars.component.html',
  styleUrl: './select-cars.component.scss',
})
export class SelectCarsComponent {
  listOfSelectedValue = [];
  carOptions = [
    {
      label: 'Porsche 911',
      value: 'Porsche 911',
      imgPath:
        'https://files.porsche.com/filestore/image/multimedia/none/911-tu-modelimage-sideshot/model/fe21bac9-833c-11eb-80d3-005056bbdc38/porsche-model.png',
    },
    {
      label: 'Audi A6',
      value: 'Audi A6',
      imgPath:
        'https://cdn.drivek.com/configurator-icon/cars/it/800/AUDI/A6/32280_WAGON-5-PORTE/audi-a6-avant-2018.png',
    },
    {
      label: 'Volvo V40',
      value: 'Volvo V40',
      imgPath:
        'https://www.volvocars.com/images/v/-/media/market-assets/italy/applications/local-pages/modelli/omologazione-autocarro/v40cc_4-3.png?h=1440&iar=0&w=1923',
    },
  ];

  @Output() onCarsSelected = new EventEmitter();
}
