import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../../services/people.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  // Attributes
  person: any;
  tvCrew = [];
  movieCrew = [];
  id: number;
  tabIndex = 0;
  position = 'right';
  url_image_profile = 'https://image.tmdb.org/t/p/w500';

  // used for responsive
  breakpoint;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getPersonDetails();
    this.breakpoint = (window.innerHeight <= 400) ? 1 : 4;

  }

  getPersonDetails() {
    this.route.params.subscribe(params => {
      const idPerson: number = +params['id'];
      this.peopleService.getPersonDetails(idPerson).subscribe(
        (data: any) => {
          this.person = data;
          console.log(this.person);
          for (let crew of this.person.combined_credits.crew) {
            if (crew.media_type === 'tv'){
              this.tvCrew.push(crew);
              console.log(crew.media_type);
            } else {
              this.movieCrew.push(crew);
              console.log(crew.media_type);
            }
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  // Function to change the tab
  changeTab() {
    this.tabIndex = 0;
  }

  onResize(event) {
    // rules for posters
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
}
