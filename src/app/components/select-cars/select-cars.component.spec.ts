import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCarsComponent } from './select-cars.component';

describe('SelectCarsComponent', () => {
  let component: SelectCarsComponent;
  let fixture: ComponentFixture<SelectCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
