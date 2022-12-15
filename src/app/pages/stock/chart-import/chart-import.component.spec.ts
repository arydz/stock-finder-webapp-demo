import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartImportComponent } from './chart-import.component';

describe('ChartImportComponent', () => {
  let component: ChartImportComponent;
  let fixture: ComponentFixture<ChartImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
