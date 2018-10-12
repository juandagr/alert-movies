
import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {of, throwError} from 'rxjs';
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
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
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
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import {By} from '@angular/platform-browser';

describe('MovieList component test', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieServiceSpy: MovieServiceSpy;
  let httpClientSpy: { get: jasmine.Spy };
  let api_service: MovieService;
  // spy creation

  // movie service
  class MovieServiceSpy {
    getPopularMovies = getPopularMoviesSpy;
  }
  const getPopularMoviesSpy = jasmine.createSpy('getPopularMovies').and.returnValue(of(movies));

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
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule, MatCheckboxModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        AppRoutingModule,
        MatGridListModule,
        MatTabsModule,
        MatDividerModule,
        MatDialogModule,
        MatTooltipModule,
        MatToolbarModule,
        NgbModule.forRoot(),
        CovalentLayoutModule,
        CovalentStepsModule,
        CovalentPagingModule,
        CovalentSearchModule,
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    movieServiceSpy = TestBed.get(MovieService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    api_service = new MovieService(<any>httpClientSpy);
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

  describe('WHEN ngOnInit function is called', () => {
    beforeEach( () => {
      spyOn(component, 'getMoviesActualPage').calls.reset();
    });

    it('SHOULD set values on variables', function () {
      component.ngOnInit();
      expect(component.currentPage).toBe(4);
      expect(component.breakpoint).toBe(4);
    });
    it('SHOULD set default values if no params are provided', fakeAsync(() => {
      component.route.params = of({});
      component.ngOnInit();
      tick();
      expect(component.currentPage)
        .toEqual(1);
    }));
    it('SHOULD read param values', fakeAsync(() => {
      component.ngOnInit();
      tick();

      expect(component.currentPage)
        .toEqual(4);
    }));
    it('SHOULD call getMoviesActualPage function', fakeAsync(function () {
      component.ngOnInit();
      tick();
      expect(component.getMoviesActualPage).toHaveBeenCalledTimes(1);
    }));
  });

  describe('WHEN getMoviesActualPage function si called', function () {
    beforeEach( () => {
      getPopularMoviesSpy.calls.reset();
    });
    it('SHOULD call movieService', function () {
      component.getMoviesActualPage();
      expect(getPopularMoviesSpy).toHaveBeenCalledTimes(1);
    });
    it('SHOULD set values on variables', function () {
      component.getMoviesActualPage();
      expect(component.movies).toBe(movies);
      expect(component.totalPages).toBe(993);
      expect(component.totalResults).toBe(19847);
    });
    it('SHOULD navigate to movie list with currente page = 1', function () {
      movieServiceSpy.getPopularMovies = jasmine.createSpy('getPopularMovies').and.returnValue(throwError('ERROR'));
      component.getMoviesActualPage();
      expect(component.currentPage).toBe(1);
      expect(navigateSpy).toHaveBeenCalledWith(['/list-movies/popular', 1]);
    });
  });

  describe('WHEN onResize function is called', () => {
    it('SHOULD set values on variables', function () {
      component.breakpoint =  4;
      component.onResize({'target': {'innerWidth': 400}});
      expect(component.breakpoint).toBe(1);

      component.onResize({'target': {'innerWidth': 600}});
      expect(component.breakpoint).toBe(2);

      component.onResize({'target': {'innerWidth': 1000}});
      expect(component.breakpoint).toBe(3);

      component.onResize({'target': {'innerWidth': 1300}});
      expect(component.breakpoint).toBe(4);
    });
  });

  describe('WHEN changePage function si called', function () {
    let event;
    beforeEach(() => {
      event = {'page': 7};
    });
    it('SHOULD call functions', function () {
      navigateSpy.calls.reset();
      spyOn(component, 'getMoviesActualPage').calls.reset();
      component.changePage(event);
      expect(component.getMoviesActualPage).toHaveBeenCalledTimes(1);
      expect(navigateSpy).toHaveBeenCalledWith(['/list-movies/popular', 7]);
    });
    it('SHOULD set values on variables', function () {
      component.changePage(event);
      expect(component.currentPage).toEqual(7);
    });
  });

  describe('WHEN navigate in a list of movies', () => {
    it('SHOULD display popular movies title', function () {
      fixture.detectChanges();
      const title = fixture.debugElement.query(By.css('.title_list')).nativeElement;
      expect(title.textContent).toContain('Popular Movies');
    });
    it('SHOULD display 20 movies', function () {
      fixture.detectChanges();
      const movies = fixture.debugElement.queryAll(By.css('.mat-figure'));
      expect(movies.length).toEqual(20);
    });
  });
});












describe('MovieList component test', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieServiceSpy: MovieServiceSpy;

  // spy creation

  // movie service
  class MovieServiceSpy {
    getPopularMovies = getPopularMoviesSpy;
  }
  const getPopularMoviesSpy = jasmine.createSpy('getPopularMovies').and.returnValue(throwError('ERROR'));

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
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule, MatCheckboxModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        AppRoutingModule,
        MatGridListModule,
        MatTabsModule,
        MatDividerModule,
        MatDialogModule,
        MatTooltipModule,
        MatToolbarModule,
        NgbModule.forRoot(),
        CovalentLayoutModule,
        CovalentStepsModule,
        CovalentPagingModule,
        CovalentSearchModule,
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    movieServiceSpy = TestBed.get(MovieService);
  });

  describe('WHEN getMoviesActualPage function si called', function () {
    beforeEach( () => {
      getPopularMoviesSpy.calls.reset();
    });
    it('SHOULD navigate to movie list with currente page = 1', function () {
      component.getMoviesActualPage();
      expect(component.currentPage).toBe(1);
      expect(navigateSpy).toHaveBeenCalledWith(['/list-movies/popular', 1]);
    });

  });

});
