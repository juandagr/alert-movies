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
              return {
                id: item.id,
                name: item.name,
                vote_average: item.vote_average,
                poster_path : item.poster_path,
                overview: item.overview,
                total_pages: data.total_pages,
                total_results: data.total_results,
                backdrop_path: data.backdrop_path
              };
            });
          }
        ));
  }

  /**
   * https://developers.themoviedb.org/3/tv/get-tv-shows-on-the-air
   * @param page: The number of the page for the search
   * @returns {Observable<any>}
   */
  getrTvShowOnAir(page: number): Observable<any> {
    const url = (this.apiUrl + '/tv/on_the_air' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
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

  /**
   * https://developers.themoviedb.org/3/tv/get-top-rated-tv
   * @param page: The number of the page for the search
   * @returns {Observable<any>}
   */
  getTopRatedTv(page: number): Observable<any> {
    const url = (this.apiUrl + '/tv/top_rated' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
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

  /**
   * https://developers.themoviedb.org/3/tv/get-latest-tv
   * @param page: The number of the page for the search
   * @returns {Observable<any>}
   */
  getLatestTv(page: number): Observable<any> {
    const url = (this.apiUrl + '/tv/airing_today' + '?api_key=' + this.apiKey + '&page=' + page + '&language=en-US');
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
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

  getTvDetails(id: number): Observable<any> {
    const append = '&append_to_response=credits,images,similar,videos';
    const url = (this.apiUrl + '/tv/' + id + '?api_key=' + this.apiKey  + append);
    return this.http
      .get(url)
      .pipe(
        map(
          (data: any) => {
            return {
              id: data.id,
              name: data.name,
              vote_average: data.vote_average,
              poster_path : data.poster_path,
              overview: data.overview,
              genres: data.genres,
              similar: data.similar,
              credits: data.credits,
              videos: data.videos,
              images: data.images,
              backdrop_path: data.backdrop_path,
              homepage: data.homepage,
              original_language: data.original_language,
              production_companies: data.production_companies,
              episode_run_time: data.episode_run_time,
              first_air_date: data.first_air_date,
              created_by: data.created_by,
              number_of_episodes: data.number_of_episodes,
              number_of_seasons: data.number_of_seasons,
              seasons: data.seasons,
              networks: data.networks
            };
          }
        ));
  }
}
