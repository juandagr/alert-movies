import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/Movie/movie-details/movie-details.component';
import {MovieListTopRatedComponent} from './components/Movie/movie-list-top-rated/movie-list-top-rated.component';
import {ListPopularPeopleComponent} from './components/People/list-popular-people/list-popular-people.component';
import {PersonDetailComponent} from './components/People/person-detail/person-detail.component';
import {MovieListNowPlayingComponent} from './components/Movie/movie-list-now-playing/movie-list-now-playing.component';
import {MovieListUpcomingComponent} from './components/Movie/movie-list-upcoming/movie-list-upcoming.component';
import {SearchComponent} from './components/search/search.component';
import {TvListPopularComponent} from './components/TvShow/tv-list-popular/tv-list-popular.component';
import {TvDetailsComponent} from './components/TvShow/tv-details/tv-details.component';
import {TvListOnAirComponent} from './components/TvShow/tv-list-on-air/tv-list-on-air.component';
import {TvListTopRatedComponent} from './components/TvShow/tv-list-top-rated/tv-list-top-rated.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-movies/popular/1', pathMatch: 'full' },
  { path: 'list-movies/popular/:page', component: MovieListComponent },
  { path: 'list-movies/top_rated/:page', component: MovieListTopRatedComponent },
  { path: 'list-movies/now_playing/:page', component: MovieListNowPlayingComponent },
  { path: 'list-movies/upcoming/:page', component: MovieListUpcomingComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'tv/popular/:page', component: TvListPopularComponent },
  { path: 'tv/on_air/:page', component: TvListOnAirComponent },
  { path: 'tv/top_rated/:page', component: TvListTopRatedComponent },
  { path: 'tv/:id', component: TvDetailsComponent },
  { path: 'people/popular/:page', component: ListPopularPeopleComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: 'search/:query/:page', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
