import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../models/Movie";

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.css']
})
export class PosterPreviewComponent implements OnInit {

  movieImg = 'https://image.tmdb.org/t/p/original'

  @Input()
  img: string

  constructor() {
  }

  ngOnInit(): void {
  }

}
