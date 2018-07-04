import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTopComponent } from './movie-list-top.component';

describe('MovieListTopComponent', () => {
  let component: MovieListTopComponent;
  let fixture: ComponentFixture<MovieListTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
