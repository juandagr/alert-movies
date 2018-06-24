import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ba6ea2be925296a75cefe8a3b8daaba9';

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<any> {
    const url = (this.apiUrl + '/movie/popular' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
    .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
              return {
                id: item.id,
                title: item.title,
                vote_average: item.vote_average,
                poster_path : item.poster_path
              };
            });
          }
        ));
  }

  getTopRatedMovies(page: number): Observable<any> {
    const url = (this.apiUrl + '/movie/top_rated' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
              return {
                id: item.id,
                title: item.title,
                vote_average: item.vote_average,
                poster_path : item.poster_path
              };
            });
          }
        ));
  }

  getMovieDetails(id: number): Observable<any> {
    const append = '&append_to_response=credits,images,similar,videos';
    const url = (this.apiUrl + '/movie/' + id + '?api_key=' + this.apiKey  + append);
    console.log(url);
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return {
              id: data.id,
              title: data.title,
              vote_average: data.vote_average,
              poster_path : data.poster_path,
              overview: data.overview,
              genres: data.genres,
              similar: data.similar,
              credits: data.credits,
              videos: data.videos,
              images: data.images,
              backdrop_path: data.backdrop_path,
              runtime: data.runtime,
              release_date: data.release_date,
              revenue: data.revenue,
              budget: data.budget,
              homepage: data.homepage
            };
          }
        ));
  }
}

