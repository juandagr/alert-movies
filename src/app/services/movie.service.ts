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

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = 'ba6ea2be925296a75cefe8a3b8daaba9';

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<any> {
    const url = (this.apiUrl + '/movie/popular' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
    .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item)=>{
              return {
                id: item.id,
                title: item.title,
                vote_average: item.vote_average,
                poster_path : item.poster_path
              }
            });
          }
        ));
  }
}

