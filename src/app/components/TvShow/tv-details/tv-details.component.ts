import { Component, OnInit } from '@angular/core';
import {TrailerComponent} from '../../Movie/trailer/trailer.component';
import {MatDialog} from '@angular/material';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {TvShowService} from '../../../services/tv-show.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  // Attributes
  tvShow;
  id: number;
  trustedDashboardUrl: SafeUrl;
  videoURL: string;
  tabIndex = 0;
  position = 'right';
  url_image_poster = 'https://image.tmdb.org/t/p/w500';
  url_images_backdrops = 'https://image.tmdb.org/t/p/original';
  url_image_profile = 'https://image.tmdb.org/t/p/w500';
  apiImgBack = 'https://image.tmdb.org/t/p/' + 'w1400_and_h450_bestv2';
  image: string;
  createdBy = '';
  networks = '';

  // used for responsive
  breakpointBackdrops;
  breakpointPosters;
  breakpointPeople;


  constructor(
    private tvShowService: TvShowService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.breakpointBackdrops = (window.innerHeight <= 400) ? 1 : 3;
    this.breakpointPosters = (window.innerHeight <= 400) ? 1 : 4;
    this.breakpointPeople = (window.innerHeight <= 400) ? 1 : 5;
    this.getTvDetails();
  }

  getTvDetails() {
    this.route.params.subscribe(params => {
      const idTv: number = +params['id'];
      this.tvShowService.getTvDetails(idTv).subscribe(
        (data: any) => {
          this.tvShow = data;
          console.log(data, "datos traidos");

          if (this.tvShow.videos) {
            for (let i = 0; i < this.tvShow.videos.results.length; i++) {
              if (this.tvShow.videos.results[i].type === 'Trailer') {
                this.videoURL = 'https://www.youtube.com/embed/' + this.tvShow.videos.results[i].key + '?autoplay=1';
                this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
                break;
              }
            }
          }

          this.getBackdropPath();
          this.getCreators();
          this.getNetworks();
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

  /**
   * Methods for manage the behavior of the screen
   * @param event: Event of change the page size
   */
  onResize(event) {
    // rules for posters
    if ((event.target.innerWidth <= 400) && (event.target.innerWidth > 0)) {
      this.breakpointPosters = 1;
    } else if ((event.target.innerWidth <= 800) && (event.target.innerWidth > 400)) {
      this.breakpointPosters = 2;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 800)) {
      this.breakpointPosters = 3;
    } else if ((event.target.innerWidth <= 1400) && (event.target.innerWidth > 1200)) {
      this.breakpointPosters = 4;
    }

    // rules for backdrops
    if ((event.target.innerWidth <= 600) && (event.target.innerWidth > 0)) {
      this.breakpointBackdrops = 1;
    } else if ((event.target.innerWidth <= 1200) && (event.target.innerWidth > 600)) {
      this.breakpointBackdrops = 2;
    } else if ((event.target.innerWidth <= 1800) && (event.target.innerWidth > 1200)) {
      this.breakpointBackdrops = 3;
    } else if (event.target.innerWidth > 1800) {
      this.breakpointBackdrops = 3;
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

  // Function to change the tab
  changeTab() {
    this.tabIndex = 0;
  }

  /**
   * gets the time in minutes and returns it in HH:mm format
   * @param minutes: Integer with the minutes
   * @returns {string}: Time with the new format
   */
  convertTime(minutes: number): string {
    let result = '';
    if (minutes) {
      const hours = Math.floor(minutes / 60);
      if (hours >= 1) {
        result += hours + 'h ';
      }
      if (minutes % 60 !== 0) {
        result += (minutes % 60) + 'min';
      }
    }
    return result;
  }

  // Function to open and play the trailer
  openTrailer(): void {
    const dialogRef = this.dialog.open(TrailerComponent, {
      width: '760px',
      height: '560px',
      data: {
        url: this.trustedDashboardUrl
      }
    });
  }

  // Function to get the networks of the tv show
  getNetworks() {
    for (let i = 0; i < this.tvShow.networks.length; i++) {
      if (i === (this.tvShow.networks.length - 1)) {
        this.networks += this.tvShow.networks[i].name;
      } else {
        this.networks += this.tvShow.networks[i].name + ', ';
      }
    }
  }

  // Function to get the creators of the tv show
  getCreators() {
    for (let i = 0; i < this.tvShow.created_by.length; i++) {
      if (i === (this.tvShow.created_by.length - 1)) {
        this.createdBy += this.tvShow.created_by[i].name;
      } else {
        this.createdBy += this.tvShow.created_by[i].name + ', ';
      }
    }
  }

  // Function to get the backdrop of the tv show
  getBackdropPath() {
    if (this.tvShow.backdrop_path) {
      this.image = this.apiImgBack + this.tvShow.backdrop_path;
    } else {
      this.image = 'assets/background.jpg';
    }
  }
}
