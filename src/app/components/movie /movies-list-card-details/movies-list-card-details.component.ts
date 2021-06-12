import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../models/Movie";
import {MovieService} from "../../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-list-card-details',
  templateUrl: './movies-list-card-details.component.html',
  styleUrls: ['./movies-list-card-details.component.css']
})
export class MoviesListCardDetailsComponent implements OnInit {
  movie:Movie
  id:number
  genres:any

  constructor(private movieService:MovieService ,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value =>{
      this.id=value.id
      this.movieService.getMovieId(this.id).subscribe(value1 => {
        this.movie=value1
        this.genres=value1.genres
      })
    })
  }

  ngOnInit(): void {
  }

  background(url: string) {
    return (`background-image: url(https://image.tmdb.org/t/p/original${url})`)

  }
}
