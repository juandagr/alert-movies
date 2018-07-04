import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/Movie/movie-details/movie-details.component';
import {MovieListTopComponent} from './components/Movie/movie-list-top/movie-list-top.component';
import {MovieListTopRatedComponent} from './components/Movie/movie-list-top-rated/movie-list-top-rated.component';
import {ListPopularPeopleComponent} from './components/People/list-popular-people/list-popular-people.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-movies/popular/1', pathMatch: 'full' },
  { path: 'list-movies/popular/:page', component: MovieListComponent },
  { path: 'list-movies/top_rated/:page', component: MovieListTopRatedComponent },
  { path: 'people/popular/:page', component: ListPopularPeopleComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
