import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { IPageChangeEvent } from '@covalent/core/paging';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies = [];
  page = 1;
  url_image = 'https://image.tmdb.org/t/p/w500';
  // used for responsive
  breakpoint;

  // Used for pagination
  currentPage = 1;
  firstLast = true;
  totalResults: number;
  totalPages: number;

  constructor(
    private movieService: MovieService,
    public router: Router) { }

  ngOnInit() {
    this.getMoviesActualPage();
    this.breakpoint = (window.innerHeight <= 400) ? 1 : 4;
  }

  changePage(event: IPageChangeEvent): void {
    this.currentPage = event.page;
    this.router.navigate(['/list-movies/popular', {'page': this.currentPage}]);
    this.getMoviesActualPage();

  }

  getMoviesActualPage() {
    this.movieService.getPopularMovies(this.currentPage).subscribe(
      (data: any ) => {
        this.movies = data;
        this.totalResults = this.movies['total_results'] <= 20000 ? this.movies['total_results'] : 20000;
        this.totalPages = this.movies['total_pages'] <= 1000 ? this.movies['total_pages'] : 1000;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onResize(event) {
    if ((event.target.innerWidth <= 400) && (event.target.innerWidth > 0)) {
      this.breakpoint = 1;
    } else if ((event.target.innerWidth <= 800) && (event.target.innerWidth > 400)) {
      this.breakpoint = 2;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 800)) {
      this.breakpoint = 3;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpoint = 4;
    }
  }

}

