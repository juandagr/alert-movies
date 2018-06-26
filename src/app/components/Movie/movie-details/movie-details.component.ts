import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  // Attributes
  movie;
  id: number;
  videoURL: string;
  tabIndex = 0;
  position = 'right';
  url_image_poster = 'https://image.tmdb.org/t/p/w500';
  url_images_backdrops = 'https://image.tmdb.org/t/p/original';
  url_image_profile = 'https://image.tmdb.org/t/p/w500';
  apiImgBack = 'https://image.tmdb.org/t/p/' + 'w1400_and_h450_bestv2';
  image: string;

  // used for responsive
  breakpointBackdrops;
  breakpointPosters;


  constructor(
    private movieService:  MovieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.breakpointBackdrops = (window.innerHeight <= 400) ? 1 : 3;
    this.breakpointPosters = (window.innerHeight <= 400) ? 1 : 4;
    this.route.params.subscribe(params =>{
      const idMovie: number = +params['id'];
      this.movieService.getMovieDetails(idMovie).subscribe(
        (data: any ) => {
          this.movie = data;
          console.log(data);

          if (this.movie.backdrop_path) {
            this.image = this.apiImgBack + this.movie.backdrop_path;
            console.log(this.image);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  onResize(event) {
    // rules for posters
    if ((event.target.innerWidth <= 400) && (event.target.innerWidth > 0)) {
      this.breakpointPosters = 1;
    } else if ((event.target.innerWidth <= 800) && (event.target.innerWidth > 400)) {
      this.breakpointPosters = 2;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 800)) {
      this.breakpointPosters = 3;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpointPosters = 4;
    }

    // rules for backdrops
    if ((event.target.innerWidth <= 600) && (event.target.innerWidth > 0)) {
      this.breakpointBackdrops = 1;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 600)) {
      this.breakpointBackdrops = 2;
    } else if ((event.target.innerWidth <= 1800) && (event.target.innerWidth > 1200)) {
      this.breakpointBackdrops = 3;
    } else if (event.target.innerWidth > 1800) {
      this.breakpointBackdrops = 3;
    }

  }
  }
