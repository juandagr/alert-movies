import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // search
  media = 'movie';
  query = '';
  results: any;
  tabIndex = 0;

  // Used for the pagination
  firstLast = true;
  totalPages: number;
  totalResults: number;
  totalMovies = 0;
  totalSeries = 0;
  totalPeople = 0;
  currentPage = 1;

  constructor(
    public searchService: SearchService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['media']) {
        this.media = params['media'];
      } else {
        this.media = 'movie';
      }
      if (params['query']) {
        this.query = params['query'];
      } else {
        this.query = '';
      }
      if (params['page']) {
        this.currentPage = params['page'];
      } else {
        this.currentPage = 1;
      }
      this.getQuery();
    });
  }

  getQuery() {
    this.searchService.searchMulti(this.query, this.currentPage).subscribe(response => {
      this.results = response.results;
      this.totalResults = response.total_results;
      this.totalPages = response.total_pages;
      console.log(this.results);
    });
  }

  // Function to change the tab
  changeTab() {
    this.tabIndex = 0;
  }
}
