import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatTooltipModule, MatToolbarModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {HttpModule} from '@angular/http';

// covalent
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentPagingModule } from '@covalent/core/paging';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/Movie/movie-details/movie-details.component';
import { MovieListTopRatedComponent } from './components/Movie/movie-list-top-rated/movie-list-top-rated.component';
import { ListPopularPeopleComponent } from './components/People/list-popular-people/list-popular-people.component';
import { TrailerComponent } from './components/Movie/trailer/trailer.component';
import { PersonDetailComponent } from './components/People/person-detail/person-detail.component';
import { MovieListUpcomingComponent } from './components/Movie/movie-list-upcoming/movie-list-upcoming.component';
import { MovieListNowPlayingComponent } from './components/Movie/movie-list-now-playing/movie-list-now-playing.component';
import { SearchComponent } from './components/search/search.component';
import {CovalentSearchModule} from '@covalent/core';
import { TvListPopularComponent } from './components/TvShow/tv-list-popular/tv-list-popular.component';
import { TvDetailsComponent } from './components/TvShow/tv-details/tv-details.component';
import { TvListOnAirComponent } from './components/TvShow/tv-list-on-air/tv-list-on-air.component';
import { TvListTopRatedComponent } from './components/TvShow/tv-list-top-rated/tv-list-top-rated.component';
import { TvListLatestComponent } from './components/TvShow/tv-list-latest/tv-list-latest.component';
import { IndexComponent } from './components/index/index.component';



@NgModule({
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
  ],
  providers: [],
  entryComponents: [ TrailerComponent ],
  bootstrap: [AppComponent],
  exports: [MovieListComponent, MovieDetailsComponent, MovieListTopRatedComponent,
    ListPopularPeopleComponent, TrailerComponent, PersonDetailComponent,
    MovieListUpcomingComponent, MovieListNowPlayingComponent, SearchComponent,
    TvListPopularComponent, TvDetailsComponent, TvListOnAirComponent, TvListTopRatedComponent,
    TvListLatestComponent, IndexComponent]
})
export class AppModule { }
