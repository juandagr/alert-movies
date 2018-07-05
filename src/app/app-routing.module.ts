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

const routes: Routes = [
  { path: '', redirectTo: '/list-movies/popular/1', pathMatch: 'full' },
  { path: 'list-movies/popular/:page', component: MovieListComponent },
  { path: 'list-movies/top_rated/:page', component: MovieListTopRatedComponent },
  { path: 'list-movies/now_playing/:page', component: MovieListNowPlayingComponent },
  { path: 'list-movies/upcoming/:page', component: MovieListUpcomingComponent },
  { path: 'people/popular/:page', component: ListPopularPeopleComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: 'search/:query/:page', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
