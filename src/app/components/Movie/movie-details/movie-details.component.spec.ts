import {MovieDetailsComponent} from './movie-details.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import {movie_details} from '../../../testing/movie-detail';
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
  MatSidenavModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AppRoutingModule} from '../../../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CovalentLayoutModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {before} from 'selenium-webdriver/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('MovieDetails component test', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  // spy creation

  // movie service
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
          provide: MovieService, useClass: class {
            getMovieDetails = getMovieDetailsSpy;
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            params: of({})
          }
        },
        {
          provide: DomSanitizer, useClass: class {
            bypassSecurityTrustResourceUrl = bypassSecurityTrustResourceUrlSpy;
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
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
