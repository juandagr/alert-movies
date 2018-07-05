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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/Movie/movie-details/movie-details.component';
import { MovieListTopRatedComponent } from './components/Movie/movie-list-top-rated/movie-list-top-rated.component';
import { ListPopularPeopleComponent } from './components/People/list-popular-people/list-popular-people.component';
import { TrailerComponent } from './components/Movie/trailer/trailer.component';
import { PersonDetailComponent } from './components/People/person-detail/person-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieListTopRatedComponent,
    ListPopularPeopleComponent,
    TrailerComponent,
    PersonDetailComponent,
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
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentPagingModule
  ],
  providers: [],
  entryComponents: [ TrailerComponent ],
  bootstrap: [AppComponent],
  exports: [MovieListComponent, MovieDetailsComponent, MovieListTopRatedComponent, ListPopularPeopleComponent, TrailerComponent, PersonDetailComponent]
})
export class AppModule { }
