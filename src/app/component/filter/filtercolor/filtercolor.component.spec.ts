import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercolorComponent } from './filtercolor.component';

describe('FiltercolorComponent', () => {
  let component: FiltercolorComponent;
  let fixture: ComponentFixture<FiltercolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
