import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {IPageChangeEvent} from '@covalent/core/paging';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // search
  url_image = 'https://image.tmdb.org/t/p/w500';
  media = 'movie';
  query = '';
  results: any;
  people = [];
  movies = [];
  tvSeries = [];
  tabIndex = 0;

  // Used for pagination
  currentPage = 1;
  firstLast = true;
  totalResults: number;
  totalPages: number;
  eventLinks: IPageChangeEvent;
  page = 1;

  // used for responsive
  breakpoint;
  breakpointPeople;

  constructor(
    public searchService: SearchService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.query = this.route.snapshot.paramMap.get('query');
      this.page = +this.route.snapshot.paramMap.get('page');
      this.currentPage = +this.route.snapshot.paramMap.get('page');
      this.getQuery();
      this.breakpoint = (window.innerHeight <= 400) ? 1 : 4;
      this.breakpointPeople = (window.innerHeight <= 400) ? 1 : 5;
    });
  }

  // Store the data from the service about the search
  getQuery() {
    this.tvSeries = [];
    this.movies = [];
    this.people = [];
    this.searchService.searchMulti(this.query, this.currentPage).subscribe(response => {
      this.results = response.results;
      this.totalResults = response.total_results;
      this.totalPages = response.total_pages;
      console.log(this.results);

      for (let result of this.results) {
        if (result.media_type === 'person') {
          this.people.push(result);
        } else if (result.media_type === 'movie') {
          this.movies.push(result);
        } else {
          this.tvSeries.push(result);
        }
      }
      console.log(this.people.length, ' perople');
      console.log(this.movies.length, ' movies');
      console.log(this.tvSeries.length, ' tv');
    });
  }

  // Function to change the tab
  changeTab() {
    this.tabIndex = 0;
  }

  /**
   * Methods for manage the behavior of the screen
   * @param event: Event of change the page size
   */
  onResize(event) {
    // rules for movies and tv shows
    if ((event.target.innerWidth <= 400) && (event.target.innerWidth > 0)) {
      this.breakpoint = 1;
    } else if ((event.target.innerWidth <= 800) && (event.target.innerWidth > 400)) {
      this.breakpoint = 2;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 800)) {
      this.breakpoint = 3;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpoint = 4;
    }

    // rules for people
    if ((event.target.innerWidth <= 360) && (event.target.innerWidth > 0)) {
      this.breakpointPeople = 1;
    } else if ((event.target.innerWidth <= 560) && (event.target.innerWidth > 360)) {
      this.breakpointPeople = 2;
    } else if ((event.target.innerWidth <= 840) && (event.target.innerWidth > 560)) {
      this.breakpointPeople = 3;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 840)) {
      this.breakpointPeople = 4;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpointPeople = 5;
    }
  }

  /**
   * manages the behavior of the pagination
   * @param event: Event of change the page
   */
  changePage(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['/search', this.query, this.page ]);
  }

  /**
   * manages the pagination
   * @param event: Event of change the page
   */
  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['/search', this.query, this.currentPage ]);
  }
}
