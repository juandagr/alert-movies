import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ba6ea2be925296a75cefe8a3b8daaba9';

  constructor(private http: HttpClient) { }

  /**
   * https://developers.themoviedb.org/3/person/popular
   * @param page: The number of the page for the search
   * @returns {Observable<any>}
   */
  getPopularPeople(page: number): Observable<any> {
    const url = (this.apiUrl + '/person/popular' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
              return {
                id: item.id,
                profile_path : item.profile_path,
                know_for: item.know_for,
                name: item.name,
                popularity: item.popularity,
                total_pages: data.total_pages,
                total_results: data.total_results
              };
            });
          }
        ));
  }

  /**
   * https://developers.themoviedb.org/3/person/id
   * @param id: The number id of the person for search
   * @returns {Observable<any>}
   */
  getPersonDetails(id: number): Observable<any> {
    const append = '&append_to_response=movie_credits,tv_credits,combined_credits';
    const url = (this.apiUrl + '/person/' + id + '?api_key=' + this.apiKey  + append);
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return {
              profile_path : data.profile_path,
              name: data.name,
              popularity: data.popularity,
              biography: data.biography,
              birthday: data.birthday,
              gender: data.gender,
              movie_credits: data.movie_credits,
              place_of_birth: data.place_of_birth,
              tv_credits: data.tv_credits,
              combined_credits: data.combined_credits
            };
          }
        ));
  }
}
