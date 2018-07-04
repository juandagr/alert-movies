import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/Movie/movie-details/movie-details.component';
import {MovieListTopComponent} from './components/Movie/movie-list-top/movie-list-top.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-movies/popular/1', pathMatch: 'full' },
  { path: 'list-movies/popular/:page', component: MovieListComponent },
  { path: 'list-movies/top_rated/:page', component: MovieListTopComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
