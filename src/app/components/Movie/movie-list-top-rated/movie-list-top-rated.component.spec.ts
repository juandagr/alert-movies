import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTopRatedComponent } from './movie-list-top-rated.component';

describe('MovieListTopRatedComponent', () => {
  let component: MovieListTopRatedComponent;
  let fixture: ComponentFixture<MovieListTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
