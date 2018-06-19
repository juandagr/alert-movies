import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movie;
  public url_image = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService:  MovieService) { }

  ngOnInit() {
    this.movieService.getMovieDetails(33).subscribe(
      (data: any ) => {
        this.movie = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
