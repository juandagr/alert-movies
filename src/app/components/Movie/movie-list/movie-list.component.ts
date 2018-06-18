import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies;
  public page:number = 1;
  url_image: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies(this.page).subscribe(
      (data: any ) =>{
        this.movies = data;
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

}

