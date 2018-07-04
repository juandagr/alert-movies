import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularPeopleComponent } from './list-popular-people.component';

describe('ListPopularPeopleComponent', () => {
  let component: ListPopularPeopleComponent;
  let fixture: ComponentFixture<ListPopularPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPopularPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPopularPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
