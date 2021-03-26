import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbrandComponent } from './filterbrand.component';

describe('FilterbrandComponent', () => {
  let component: FilterbrandComponent;
  let fixture: ComponentFixture<FilterbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
