import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatGridListModule, MatListModule, MatTabsModule, MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {HttpModule} from '@angular/http';

//covalent
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentPagingModule } from '@covalent/core/paging';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/Movie/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent
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
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentPagingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MovieListComponent, MovieDetailsComponent]
})
export class AppModule { }
