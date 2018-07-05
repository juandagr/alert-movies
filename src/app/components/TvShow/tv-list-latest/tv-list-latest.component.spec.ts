import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvListLatestComponent } from './tv-list-latest.component';

describe('TvListLatestComponent', () => {
  let component: TvListLatestComponent;
  let fixture: ComponentFixture<TvListLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvListLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvListLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
