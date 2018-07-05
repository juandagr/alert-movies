import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvListPopularComponent } from './tv-list-popular.component';

describe('TvListPopularComponent', () => {
  let component: TvListPopularComponent;
  let fixture: ComponentFixture<TvListPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvListPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvListPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
