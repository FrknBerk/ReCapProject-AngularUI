import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalcarComponent } from './rentalcar.component';

describe('RentalcarComponent', () => {
  let component: RentalcarComponent;
  let fixture: ComponentFixture<RentalcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
