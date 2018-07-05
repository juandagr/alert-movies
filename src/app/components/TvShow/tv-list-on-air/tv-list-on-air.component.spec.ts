import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvListOnAirComponent } from './tv-list-on-air.component';

describe('TvListOnAirComponent', () => {
  let component: TvListOnAirComponent;
  let fixture: ComponentFixture<TvListOnAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvListOnAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvListOnAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
