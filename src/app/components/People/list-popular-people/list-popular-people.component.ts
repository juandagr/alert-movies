import { Component, OnInit } from '@angular/core';
import {IPageChangeEvent} from '@covalent/core/paging';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../../../services/people.service';

@Component({
  selector: 'app-list-popular-people',
  templateUrl: './list-popular-people.component.html',
  styleUrls: ['./list-popular-people.component.scss']
})
export class ListPopularPeopleComponent implements OnInit {

  // Attributes
  eventLinks: IPageChangeEvent;
  people: any[];
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
    private peopleService: PeopleService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPage = +this.route.snapshot.paramMap.get('page');
    this.getPeopleActualPage();
    this.breakpoint = (window.innerHeight <= 400) ? 1 : 5;
  }

  /**
   * manages the behavior of the pagination
   * @param event: Event of change the page
   */
  changePage(event: IPageChangeEvent): void {
    this.currentPage = event.page;
    this.router.navigate(['/people/popular', this.currentPage]);
    this.getPeopleActualPage();

  }

  // Method for get the movies with the actual page
  getPeopleActualPage() {
    this.peopleService.getPopularPeople(this.currentPage).subscribe(
      (data: any ) => {
        this.people = data;
        this.totalResults = this.people[0].total_results;
        this.totalPages = this.people[0].total_pages;
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
    if ((event.target.innerWidth <= 360) && (event.target.innerWidth > 0)) {
      this.breakpoint = 1;
    } else if ((event.target.innerWidth <= 560) && (event.target.innerWidth > 360)) {
      this.breakpoint = 2;
    } else if ((event.target.innerWidth <= 840) && (event.target.innerWidth > 560)) {
      this.breakpoint = 3;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 840)) {
      this.breakpoint = 4;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpoint = 5;
    }
  }

  /**
   * manages the pagination
   * @param event: Event of change the page
   */
  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
    this.page = this.eventLinks.page;
    this.router.navigate(['/list-movies/popular', this.page]);
    this.getPeopleActualPage();
  }
}
