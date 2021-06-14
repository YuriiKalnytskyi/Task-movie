import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Res} from "../../../models/Res";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  res: Res

  searchControl = new FormControl()
  myGroup = new FormGroup({
    search: this.searchControl
  })

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(1).subscribe(value => this.res = value)
  }

  next(value: number) {
    this.movieService.getMovie(this.res.page + value).subscribe(value => this.res = value)
  }

  back(value: number) {
    this.movieService.getMovie(this.res.page - value).subscribe(value => this.res = value)
  }

  first() {
    this.movieService.getMovie(1).subscribe(value => this.res = value)
  }

  last() {
    this.movieService.getMovie(this.res.total_pages).subscribe(value => this.res = value)
  }

  newtem() {
    // @ts-ignore
    return JSON.parse<boolean>(localStorage.getItem('sw'))
  }


  search() {
    const searchVelue = this.myGroup.value
    console.log(searchVelue)
    if (searchVelue.search === '') {
      this.movieService.getMovie(1).subscribe(value => {
        this.res = value
      })
    } else {
      this.movieService.searchFilm(searchVelue.search).subscribe(value => {
        this.res = value
      })
    }

  }
}
