import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ba6ea2be925296a75cefe8a3b8daaba9';

  constructor(private http: HttpClient) { }

  /**
   * searches for movies, series and people
   * https://developers.themoviedb.org/3/search/multi-search
   * @param query: This is the text to search
   * @param page: The number of the page for the search
   * @returns {Observable<any>}
   */
  searchMulti(query: string, page: number): Observable<any> {
    const args = '&page=' + page + '&query=' + query;
    const url = (this.apiUrl + '/search/multi' + '?api_key=' + this.apiKey + args);
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
              console.log(data);
              return {

              };
            });
          }
        ));
  }
}
