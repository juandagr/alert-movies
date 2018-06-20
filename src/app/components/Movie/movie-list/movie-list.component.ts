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
  }

  changePage(event: IPageChangeEvent): void {
    this.currentPage = event.page;
    this.router.navigate(['/list-movies/popular', {'page': this.currentPage}]);
    this.getMoviesActualPage();
    
  }

  getMoviesActualPage(){
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

}

