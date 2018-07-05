import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'app';
  query: string;
  searchInputTerm: string;

  constructor ( private route: ActivatedRoute,
               private router: Router, private location: Location) { }

  ngOnInit() {
  }

  handleSearch (event) {
    this.query = event;
    this.router.navigate(['search', this.query, 1]);
  }
}
