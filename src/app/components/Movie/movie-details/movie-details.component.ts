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


  constructor(
    private movieService:  MovieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
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

}
