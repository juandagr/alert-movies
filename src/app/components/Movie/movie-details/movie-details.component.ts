import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movie = {
    id: 0,
    title: "",
    vote_average: 0,
    poster_path : "",
    overview: "",
    genres: []

  };
  public url_image = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private movieService:  MovieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let idMovie:number = +params['id'];
      this.movieService.getMovieDetails(idMovie).subscribe(
        (data: any ) => {
          this.movie = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        }
      );
    })
    
  }

}
