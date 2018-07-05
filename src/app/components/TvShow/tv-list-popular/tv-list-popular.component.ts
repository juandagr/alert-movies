import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPageChangeEvent} from '@covalent/core/paging';
import {TvShowService} from '../../../services/tv-show.service';

@Component({
  selector: 'app-tv-list-popular',
  templateUrl: './tv-list-popular.component.html',
  styleUrls: ['./tv-list-popular.component.scss']
})
export class TvListPopularComponent implements OnInit {

  // Attributes
  eventLinks: IPageChangeEvent;
  tvShows: any[];
  page = 1;
  url_image = 'https://image.tmdb.org/t/p/w500';
  // used for responsive
  breakpoint;

  // Used for pagination
  currentPage = 1;
  firstLast = true;
  totalResults: number;
  totalPages: number;

  constructor(
    private tvShowService: TvShowService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPage = +this.route.snapshot.paramMap.get('page');
    this.getTvShowsActualPage();
    this.breakpoint = (window.innerHeight <= 400) ? 1 : 4;
  }

  /**
   * manages the behavior of the pagination
   * @param event: Event of change the page
   */
  changePage(event: IPageChangeEvent): void {
    this.currentPage = event.page;
    this.router.navigate(['/tv/popular', this.currentPage]);
    this.getTvShowsActualPage();

  }

  // Method for get the movies with the actual page
  getTvShowsActualPage() {
    this.tvShowService.getPopularTvShow(this.currentPage).subscribe(
      (data: any ) => {
        this.tvShows = data;
        this.totalResults = this.tvShows[0].total_results;
        this.totalPages = this.tvShows[0].total_pages;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /**
   * Methods for manage the behavior of the screen
   * @param event: Event of change the page size
   */
  onResize(event) {
    if ((event.target.innerWidth <= 400) && (event.target.innerWidth > 0)) {
      this.breakpoint = 1;
    } else if ((event.target.innerWidth <= 800) && (event.target.innerWidth > 400)) {
      this.breakpoint = 2;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 800)) {
      this.breakpoint = 3;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpoint = 4;
    }
  }

  /**
   * manages the pagination
   * @param event: Event of change the page
   */
  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['/tv/popular', this.page]);
    this.getTvShowsActualPage();
  }

}
