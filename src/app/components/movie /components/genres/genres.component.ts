import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  @Input()
  genres: any

  constructor() {
  }

  ngOnInit(): void {
  }

}
