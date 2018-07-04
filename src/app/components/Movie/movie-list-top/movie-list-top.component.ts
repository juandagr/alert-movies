import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-movie-list-top',
  templateUrl: './movie-list-top.component.html',
  styleUrls: ['./movie-list-top.component.scss']
})
export class MovieListTopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MovieListTopComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
