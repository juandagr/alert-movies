import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListUpcomingComponent } from './movie-list-upcoming.component';

describe('MovieListUpcomingComponent', () => {
  let component: MovieListUpcomingComponent;
  let fixture: ComponentFixture<MovieListUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
