import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/Movie";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie:Movie

  constructor() { }

  ngOnInit(): void {
  }

  newtem() {
    // @ts-ignore
    return JSON.parse<boolean>(localStorage.getItem('sw'))
  }

}
