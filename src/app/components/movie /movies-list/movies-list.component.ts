import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Res} from "../../../models/Res";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  res:Res




  constructor(private movieService:MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(1).subscribe(value =>this.res=value)
  }

  next(value: number) {
    this.movieService.getMovie(this.res.page+value).subscribe(value =>this.res=value)
  }
  back(value: number) {
    this.movieService.getMovie(this.res.page-value).subscribe(value =>this.res=value)
  }
  first() {
    this.movieService.getMovie(1).subscribe(value =>this.res=value)
  }
  last() {
    this.movieService.getMovie(this.res.total_pages).subscribe(value =>this.res=value)
  }


}
