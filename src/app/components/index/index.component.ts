import { Component, OnInit } from '@angular/core';
// carousel config
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {MovieService} from '../../services/movie.service';
import {TvShowService} from '../../services/tv-show.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class IndexComponent implements OnInit {

  movies = [];
  tvShows = [];
  url_image = 'https://image.tmdb.org/t/p/w500';

  // used for responsive
  breakpoint;

  constructor(
    public movieService: MovieService,
    public tvShowService: TvShowService,
    private carouselConfig: NgbCarouselConfig
  ) {
    carouselConfig.interval = 3000;
  }

  ngOnInit() {
    this.getPopularMovies();
    this.getPopularTvShows();
    this.breakpoint = (window.innerHeight <= 400) ? 1 : 4;

  }

  // Method for get the popular movies
  getPopularMovies() {
    this.movieService.getPopularMovies(1).subscribe(
      (data: any) => {
        this.movies = data.slice(0, 8);
        console.log(this.movies, 'movies');
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  // Method for get the popular tv shows
  getPopularTvShows() {
    this.tvShowService.getPopularTvShow(1).subscribe(
      (data: any) => {
        this.tvShows = data.slice(0, 8);
        console.log(this.tvShows, 'tv');
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  /**
   * Methods for manage the behavior of the screen
   * @param event: Event of change the page size
   */
  onResize(event) {
    // rules for posters
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
