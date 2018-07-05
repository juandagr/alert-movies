import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ba6ea2be925296a75cefe8a3b8daaba9';

  constructor(private http: HttpClient) { }

  /**
   * https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   * @param page: The number of the page for the search
   * @returns {Observable<any>}
   */
  getPopularTvShow(page: number): Observable<any> {
    const url = (this.apiUrl + '/tv/popular' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
              console.log(data)
              return {
                id: item.id,
                name: item.name,
                vote_average: item.vote_average,
                poster_path : item.poster_path,
                overview: item.overview,
                total_pages: data.total_pages,
                total_results: data.total_results
              };
            });
          }
        ));
  }
}
