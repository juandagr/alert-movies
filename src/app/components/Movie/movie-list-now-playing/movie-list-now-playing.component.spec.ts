import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {movies} from '../../../testing/movie-service-mock';
import {AppComponent} from '../../../app.component';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {MovieListTopRatedComponent} from '../movie-list-top-rated/movie-list-top-rated.component';
import {ListPopularPeopleComponent} from '../../People/list-popular-people/list-popular-people.component';
import {TrailerComponent} from '../trailer/trailer.component';
import {PersonDetailComponent} from '../../People/person-detail/person-detail.component';
import {MovieListUpcomingComponent} from '../movie-list-upcoming/movie-list-upcoming.component';
import {MovieListNowPlayingComponent} from '../movie-list-now-playing/movie-list-now-playing.component';
import {SearchComponent} from '../../search/search.component';
import {TvListPopularComponent} from '../../TvShow/tv-list-popular/tv-list-popular.component';
import {TvDetailsComponent} from '../../TvShow/tv-details/tv-details.component';
import {TvListOnAirComponent} from '../../TvShow/tv-list-on-air/tv-list-on-air.component';
import {TvListTopRatedComponent} from '../../TvShow/tv-list-top-rated/tv-list-top-rated.component';
import {TvListLatestComponent} from '../../TvShow/tv-list-latest/tv-list-latest.component';
import {IndexComponent} from '../../index/index.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule, MatDialogModule, MatDividerModule, MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AppRoutingModule} from '../../../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CovalentLayoutModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import SpyObj = jasmine.SpyObj;
import {by} from 'protractor';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

xdescribe('MovieListPlayingNow component test', () => {
  let component: MovieListNowPlayingComponent;
  let fixture: ComponentFixture<MovieListNowPlayingComponent>;
  let movieServiceSpy: MovieServiceSpy;

  // spy creation

  // movie service
  class MovieServiceSpy {
    getNowPlayingMovies = getNowPlayingMoviesSpy;
  }
  const getNowPlayingMoviesSpy = jasmine.createSpy('getNowPlayingMovies').and.returnValue(of(movies));

  // router
  const navigateSpy = jasmine.createSpy('navigate');
  const params = {page: 4};


  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieListComponent,
        MovieDetailsComponent,
        MovieListTopRatedComponent,
        ListPopularPeopleComponent,
        TrailerComponent,
        PersonDetailComponent,
        MovieListUpcomingComponent,
        MovieListNowPlayingComponent,
        SearchComponent,
        TvListPopularComponent,
        TvDetailsComponent,
        TvListOnAirComponent,
        TvListTopRatedComponent,
        TvListLatestComponent,
        IndexComponent,
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: MovieService, useClass: MovieServiceSpy
        },
        {
          provide: ActivatedRoute, useValue: {
            params: of(params)
          }
        },
        {
          provide: Router, useClass: class {
            navigate = navigateSpy;
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListNowPlayingComponent);
    component = fixture.componentInstance;
    movieServiceSpy = TestBed.get(MovieService);
  });

  describe('WHEN component is created', () => {
    it('SHOULD create the component variables ', function () {
      expect(component).toBeTruthy();
      expect(component.eventLinks).toBeUndefined();
      expect(component.movies).toBeUndefined();
      expect(component.page).toBe(1);
      expect(component.url_image).toBe('https://image.tmdb.org/t/p/w500');
      expect(component.breakpoint).toBeUndefined();
      expect(component.currentPage).toBe(1);
      expect(component.firstLast).toBe(true);
      expect(component.totalResults).toBeUndefined();
      expect(component.totalPages).toBeUndefined();
    });
  });

});
