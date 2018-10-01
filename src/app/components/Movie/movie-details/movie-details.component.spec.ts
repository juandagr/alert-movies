import {MovieDetailsComponent} from './movie-details.component';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {of} from 'rxjs';
import {movie_details} from '../../../testing/movie-service-mock';
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
  MatChipsModule, MatDialog, MatDialogModule, MatDividerModule, MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatTabChangeEvent, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AppRoutingModule} from '../../../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CovalentLayoutModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {By, DomSanitizer} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

xdescribe('MovieDetails component test', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let movieServiceSpy: MovieServiceSpy;

  // spy creation

  // movie service
  class MovieServiceSpy {
    getMovieDetails = getMovieDetailsSpy;
  }
  const getMovieDetailsSpy = jasmine.createSpy('getMovieDetails').and.returnValue(of(movie_details));

  // router
  const navigateSpy = jasmine.createSpy('navigate');

  // sanitizer
  const bypassSecurityTrustResourceUrlSpy = jasmine.createSpy('bypassSecurityTrustResourceUrl');

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
            params: of({})
          }
        },
        {
          provide: DomSanitizer, useValue: {
            sanitize: () => 'safeString',
            bypassSecurityTrustHtml: () => 'safeString',
            bypassSecurityTrustResourceUrl: () => 'safeString'
          }
        },
        {
          provide: MatDialog, useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    movieServiceSpy = TestBed.get(MovieService);
  });

  describe('WHEN component is created', () => {
    it('SHOULD create the component variables ', function () {
      expect(component).toBeTruthy();
      expect(component.movie).toBeUndefined();
      expect(component.id).toBeUndefined();
      expect(component.trustedDashboardUrl).toBeUndefined();
      expect(component.videoURL).toBeUndefined();
      expect(component.tabIndex).toBe(0);
      expect(component.position).toBe('right');
      expect(component.url_image_poster).toBe('https://image.tmdb.org/t/p/w500');
      expect(component.url_images_backdrops).toBe('https://image.tmdb.org/t/p/original');
      expect(component.url_image_profile).toBe('https://image.tmdb.org/t/p/w500');
      expect(component.apiImgBack).toBe('https://image.tmdb.org/t/p/' + 'w1400_and_h450_bestv2');
      expect(component.image).toBeUndefined();
      expect(component.breakpointBackdrops).toBeUndefined();
      expect(component.breakpointPeople).toBeUndefined();
      expect(component.breakpointPosters).toBeUndefined();
    });
  });

  describe('WHEN ngOnInit function is called', () => {
    beforeEach( () => {
      spyOn(component, 'getMovieDetails').calls.reset();
    });

    it('SHOULD set values on variables', function () {
      component.ngOnInit();
      expect(component.breakpointBackdrops).toBe(3);
      expect(component.breakpointPosters).toBe(4);
      expect(component.breakpointPeople).toBe(5);
    });
    it('SHOULD call getMovieDetails function', fakeAsync(function () {
      component.ngOnInit();
      tick();
      expect(component.getMovieDetails).toHaveBeenCalledTimes(1);
    }));
  });

  describe('WHEN getMovieDetails function is called', () => {
    beforeEach(() => {
      movieServiceSpy.getMovieDetails.calls.reset();
    });
    it('SHOULD call movieService', function () {
      component.getMovieDetails();
      expect(movieServiceSpy.getMovieDetails).toHaveBeenCalledTimes(1);
    });
    it('SHOULD set values on variables', function () {
      component.getMovieDetails();
      expect(component.movie).toBe(movie_details);
      expect(component.image).toBe(component.apiImgBack + '/f4E0ocYeToEuXvczZv6QArrMDJ.jpg');
      expect(component.videoURL).toBe('https://www.youtube.com/embed/' + 'WaG1KZqrLvM' + '?autoplay=1');
      expect(component.trustedDashboardUrl).toBe('safeString');
    });
  });

  describe('WHEN onResize function is called', () => {
    let event;
    beforeEach(() => {
      event = {'target': {'innerWidth': 400}};
    });
    it('SHOULD set values on variables', function () {
      component.breakpointBackdrops =  3;
      component.breakpointPosters =  4;
      component.breakpointPeople =  5;
      component.onResize({'target': {'innerWidth': 400}});
      expect(component.breakpointBackdrops).toBe(1);
      expect(component.breakpointPosters).toBe(1);
      expect(component.breakpointPeople).toBe(2);
    });
  });

  describe('WHEN the user change the tab', () => {
    let tab;

    it('SHOULD change the index', fakeAsync(function () {
      fixture.detectChanges();
      tab = fixture.debugElement.queryAll(By.css('.mat-tab-label'))[1].nativeElement;
      tab.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      tick();
      expect(component.tabIndex).toBe(1);
    }));
  });

  describe('WHEN convertTime function is called', () => {
    let minutes: number;

    it('SHOULD return time in h:min format', function () {
      minutes = 150;
      expect(component.convertTime(minutes)).toBe('2h 30min');
    });
    it('SHOULD return "" if the param is undefined', function () {
      minutes = undefined;
      expect(component.convertTime(minutes)).toBe('');
    });
  });

  describe('WHEN navigate to existing movie', () => {
    it('SHOULD display the movie general details', function () {
      fixture.detectChanges();
      const title = fixture.debugElement.query(By.css('.movieTitle')).nativeElement;
      const tagLine = fixture.debugElement.query(By.css('h4')).nativeElement;
      const average = fixture.debugElement.query(By.css('#averagee')).nativeElement;
      const runtime = fixture.debugElement.query(By.css('#runtime')).nativeElement;
      const revenue = fixture.debugElement.query(By.css('#revenue')).nativeElement;
      const budget = fixture.debugElement.query(By.css('#budget')).nativeElement;
      const genres = fixture.debugElement.queryAll(By.css('.chip-genre'));

      expect(title.textContent).toBe(movie_details.title);
      expect(tagLine.textContent).toBe(movie_details.tagline);
      expect(average.textContent).toBe(movie_details.vote_average + 'star_rate');
      expect(runtime.textContent).toContain(component.convertTime(movie_details.runtime));
      expect(revenue.textContent).toContain(movie_details.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
      expect(budget.textContent).toContain(movie_details.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
      for (let i = 0; i < genres.length; i++) {
        expect(genres[i].nativeElement.textContent).toContain(movie_details.genres[i].name);
      }
    });
  });
});
