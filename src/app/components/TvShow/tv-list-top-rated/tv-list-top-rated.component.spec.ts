import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvListTopRatedComponent } from './tv-list-top-rated.component';

describe('TvListTopRatedComponent', () => {
  let component: TvListTopRatedComponent;
  let fixture: ComponentFixture<TvListTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvListTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvListTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
